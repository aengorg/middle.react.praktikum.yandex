import React from 'react';
import './ChannelList.css';

import { TChannelId, IChannel } from '../Channel/types';
import { TChannelsList } from './types';
import { Channel } from '../Channel/Channel';

// types
interface IProps {
  activeChannelId: TChannelId;
  channelsList: TChannelsList;
  onChannelChange: any;
}

// component
export const ChannelList = ({ activeChannelId, channelsList, onChannelChange }: IProps) => {
  const sortedChannelsList: TChannelsList = channelsList.sort((a: IChannel, b: IChannel) => {
    if (a.lastMessage === undefined || b.lastMessage === undefined) return 1;
    return b.lastMessage.date - a.lastMessage.date;
  });

  return (
    <div className='channel-list'>
      {sortedChannelsList.map((channel: IChannel) => (
        <Channel
          key={channel.id}
          channel={channel}
          activeChannelId={activeChannelId}
          onChannelChange={onChannelChange}
        />
      ))}
    </div>
  );
};
