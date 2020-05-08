import React from 'react';
import './ChannelList.scss';

import { Channel } from '../Channel';

import { IChannel } from '../Channel/types';
import { TChannelsList, IChannelListProps } from './types';

export const ChannelList = ({
  activeChannelId,
  channelsList,
  onChannelChange,
  className = ''
}: IChannelListProps) => {
  const sortedChannelsList: TChannelsList = channelsList.sort((a: IChannel, b: IChannel) =>
    a.lastMessage && b.lastMessage ? b.lastMessage.date - a.lastMessage.date : 1
  );

  return (
    <div className={`${className} channel-list`}>
      {sortedChannelsList.map((channel: IChannel) => (
        <Channel
          {...channel}
          key={channel.id}
          isSelected={activeChannelId === channel.id}
          onChannelChange={onChannelChange}
            className="channel-list__channel"
          />
      ))}
    </div>
  );
};
