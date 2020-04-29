import React, { Component } from 'react';
import './Chat.scss';

import * as channelsAPI from '../../api/channels';
import * as messagesAPI from '../../api/messages';

import ChannelList from '../ChannelList';
import MessageList from '../MessageList';

import { IChatProps, IChatState } from './types';
import { TChannelId } from '../Channel/types';
import { TChannelsList } from '../ChannelList/types';

export class Chat extends Component<IChatProps, IChatState> {
  constructor(props: IChatProps) {
    super(props);

    this.setChannels = this.setChannels.bind(this);
    this.setMessages = this.setMessages.bind(this);
  }

  state: Readonly<IChatState> = {
    activeChannelId: '',
    channels: [],
    messages: []
  };

  componentDidMount() {
    this.setChannels();
    this.setMessages('0');
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
