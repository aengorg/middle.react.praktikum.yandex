import React, { Component } from 'react';
import './Chat.css';

import * as channelsAPI from '../../api/channels';
import * as messagesAPI from '../../api/messages';

import { TChannelId } from '../Channel/types';
import { TChannelsList } from '../ChannelList/types';
import { TMessagesList } from '../MessageList/types';

import { ChannelList } from '../ChannelList/ChannelList';
import { MessageList } from '../MessageList/MessageList';

interface IProps {}

interface IState {
  activeChannelId: TChannelId;
  channels: TChannelsList;
  messages: TMessagesList;
}

class Chat extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.setChannels = this.setChannels.bind(this);
    this.setMessages = this.setMessages.bind(this);
  }

  state: Readonly<IState> = {
    activeChannelId: '',
    channels: [],
    messages: []
  };

  componentDidMount() {
    this.setChannels();
    this.setMessages('0');
  }

  async setChannels(): Promise<void> {
    const channels = (await channelsAPI.getChannels()) || [];
    this.setState({
      channels: channels
    });
  }

  async setMessages(channelId: TChannelId): Promise<void> {
    const messages = (await messagesAPI.getMessages(channelId)) || [];
    this.setState({
      activeChannelId: channelId
    });
    this.setState({
      messages: messages
    });
  }

  render() {
    const channelsList = this.state.channels;
    const messagesList = this.state.messages;
    const activeChannelId = this.state.activeChannelId;

    return (
      <div className='chat'>
        <div className='sidebar'>
          <ChannelList
            channelsList={channelsList}
            activeChannelId={activeChannelId}
            onChannelChange={this.setMessages}
          />
        </div>
        <div className='main'>
          <MessageList messagesList={messagesList} />
        </div>
      </div>
    );
  }
}

export default Chat;
