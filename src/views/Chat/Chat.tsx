import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ChannelList } from '../../components/ChannelList';
import { MessageList } from '../../components/MessageList';
import { ChatInput } from '../../components/ChatInput';
import { UserProfile } from '../../components/UserProfile';
import './Chat.scss';

import { genKey } from '../../utils/generation';

import channelsAPI from '../../api/channels';
import messagesAPI from '../../api/messages';

import { Props, State } from './types';
import { TChannelId, IMessage, ILastMessage } from '../../types';

export class Chat extends Component<Props, State> {
  public state: Readonly<State> = {
    activeChannelId: '',
    channels: [],
    messages: [],
  };

  public async componentDidMount() {
    const { channelId } = this.props.match.params;
    this.loadChannels();

    if (channelId) {
      this.loadMessages(channelId);
    }
  }

  public componentDidUpdate(prevProps: Props): void {
    const oldChannelId = prevProps.match.params.channelId;
    const newChannelId = this.props.match.params.channelId;

    if (oldChannelId !== newChannelId) {
      this.setState({
        activeChannelId: newChannelId,
      });
      this.loadMessages(newChannelId);
    }
  }

  private loadChannels = async (): Promise<void> => {
    const { user } = this.props;

    const channels = await channelsAPI.getChannels(user.id);
    this.setState({
      channels: channels,
    });
  };

  private loadMessages = async (channelId: TChannelId): Promise<void> => {
    const { history } = this.props;

    const messages = await messagesAPI.getMessages(channelId);
    if (messages !== undefined) {
      this.setState({
        activeChannelId: channelId,
        messages: messages,
      });

      if (messages.length) {
        const lastMessage = messages[messages.length - 1];
        this.updateLastMessage(channelId, lastMessage);
      }
    } else {
      history.replace('/');
    }
  };

  private updateLastMessage = (
    channelId: TChannelId,
    message: IMessage
  ): void => {
    const lastMessage: ILastMessage = {
      userName: message.user.name,
      date: message.message.date,
      text: message.message.content,
    };

    this.setState((state) => {
      return {
        channels: state.channels.map((channel) => {
          if (channel.id === channelId) channel.lastMessage = lastMessage;
          return channel;
        }),
      };
    });
  };

  private addMessage = (text: string): void => {
    // при отправке на сервер мы должны указать activeChannelId
    const { activeChannelId } = this.state;
    const { user } = this.props;

    const newMessage: IMessage = {
      user,
      message: {
        id: genKey(),
        date: Date.now(),
        content: text,
      },
    };

    this.setState((state) => {
      return {
        messages: [...state.messages, newMessage],
      };
    });

    this.updateLastMessage(activeChannelId, newMessage);
  };

  public render() {
    const { channels, messages, activeChannelId } = this.state;
    const { user, logoutUser, localization } = this.props;

    return (
      <div className="chat">
        <div className="chat__sidebar">
          <Route path="/chat/:channelId?">
            <ChannelList
              className="chat__channel-list"
              channelsList={channels}
              activeChannelId={activeChannelId}
              onChannelChange={this.loadMessages}
            />
            <UserProfile
              className="chat__user-profile"
              logoutUser={logoutUser}
              user={user}
            />
          </Route>
        </div>
        <Switch>
          <Route path="/chat/:channelId">
            <div className="chat__main">
              <div className="chat__message-search">{localization.search}</div>
              <MessageList
                className="chat__message-list"
                messagesList={messages}
              />
              <ChatInput
                className="chat__text-field"
                sendMessage={this.addMessage}
              />
            </div>
          </Route>
          <Route path="/chat">
            <div className="chat__main--empty">
              {localization.selectChannel}
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}
