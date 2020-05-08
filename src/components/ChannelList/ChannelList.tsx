import React from 'react';
import './ChannelList.scss';

import { Channel } from '../Channel';

import { Props } from './types';
import { IChannel, TChannelsList } from '../../types';

export const ChannelList = ({
  activeChannelId,
  channelsList,
  onChannelChange,
  className = '',
}: Props) => {
  const sortedChannelsList: TChannelsList = channelsList.sort(
    a.lastMessage && b.lastMessage ? b.lastMessage.date - a.lastMessage.date : 1
  );

  return (
    <div className={`channel-list ${className}`}>
      {sortedChannelsList.map((channel: IChannel) => (
        <Channel
          {...channel}
          key={channel.id}
          isSelected={activeChannelId === channel.id}
          onChannelChange={onChannelChange}
          className='channel-list__channel'
        />
      ))}
    </div>
  );
};
