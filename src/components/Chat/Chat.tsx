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
    const channels = await this.setChannels();
    if (channels.length) this.setMessages(channels[0].id);
  }

  async setChannels(): Promise<TChannelsList> {
    const channels = await channelsAPI.getChannels();
    this.setState({
      channels: channels
    });
    return channels;
  }

  async setMessages(channelId: TChannelId): Promise<void> {
    const messages = await messagesAPI.getMessages(channelId);
    this.setState({
      activeChannelId: channelId,
      messages: messages
    });
  }

  render() {
    const channelsList = this.state.channels;
    const messagesList = this.state.messages;
    const activeChannelId = this.state.activeChannelId;

    return (
      <div className='chat'>
        <ChannelList
          className='chat__channel-list'
          channelsList={channelsList}
          activeChannelId={activeChannelId}
          onChannelChange={this.setMessages}
        />
        <MessageList className='chat__message-list' messagesList={messagesList} />
      </div>
    );
  }
}
