import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ChannelList } from '../ChannelList';
import { MessageList } from '../MessageList';
import { ChatInput } from '../ChatInput';
import './Chat.scss';

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

  async componentDidMount() {
    this.setChannels();
    const { channelId } = this.props.match.params;

    if (channelId) {
      this.setMessages(channelId);
    }
  }

  private setChannels = async (): Promise<void> => {
    setTimeout(async () => {
      const channels = await channelsAPI.getChannels();
      this.setState({
        channels: channels,
      });
    }, 1000);
  };

  private setMessages = async (channelId: TChannelId): Promise<void> => {
    setTimeout(async () => {
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
      }
    }, 1500);
  };

  private updateLastMessage = (channelId: TChannelId, message: IMessage): void => {
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

    const newMessage: IMessage = {
      user: {
        id: '999',
        name: 'Me',
        avatar: '',
      },
      message: {
        id: '',
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
    const { localization } = this.props;

    return (
      <div className="chat">
        <div className="chat__sidebar">
          <Route path="/chat/:channelId?">
            <ChannelList
              className="chat__channel-list"
              channelsList={channels}
              activeChannelId={activeChannelId}
              onChannelChange={this.setMessages}
            />
          </Route>
        </div>
        <Switch>
          <Route path="/chat/:channelId">
            <div className="chat__main">
              <div className="chat__message-search">{localization.search}</div>
              <MessageList className="chat__message-list" messagesList={messages} />
              <ChatInput className="chat__text-field" sendMessage={this.addMessage} />
            </div>
          </Route>
          <Route path="/chat">
            <div className="chat__main--empty">{localization.selectChannel}</div>
          </Route>
        </Switch>
      </div>
    );
  }
}
