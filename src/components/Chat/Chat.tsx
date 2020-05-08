import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ChannelList } from '../ChannelList';
import { MessageList } from '../MessageList';
import './Chat.scss';

import * as channelsAPI from '../../api/channels';
import * as messagesAPI from '../../api/messages';

import { Props, State } from './types';
import { TChannelId } from '../../types';

export class Chat extends Component<Props, State> {
  state: Readonly<State> = {
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

  setChannels = async (): Promise<void> => {
    const channels = await channelsAPI.getChannels();
    this.setState({
      channels: channels,
    });
  };

  setMessages = async (channelId: TChannelId): Promise<void> => {
    const messages = await messagesAPI.getMessages(channelId);
    if (messages !== undefined) {
      this.setState({
        activeChannelId: channelId,
        messages: messages,
      });
    }
  };

  render() {
    const { channels, messages, activeChannelId } = this.state;

    return (
      <div className="chat">
        <div className="chat__header">
          {/* <div>search 1</div>
          <div>search 2</div> */}
        </div>
        <div className="chat__body">
          <Route path="/chat/:channelId?">
            <ChannelList
              className="chat__channel-list"
              channelsList={channels}
              activeChannelId={activeChannelId}
              onChannelChange={this.setMessages}
            />
          </Route>
          <Switch>
            <Route path="/chat/:channelId">
              <MessageList
                className="chat__message-list"
                messagesList={messages}
              />
            </Route>
            <Route path="/chat">
              <div className="chat__message-list">ZERO</div>
            </Route>
          </Switch>
        </div>
        <div className="chat__footer">
          {/* <div>profile</div>
          <div>send msg</div> */}
        </div>
      </div>
    );
  }
}
