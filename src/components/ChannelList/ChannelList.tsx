import React from 'react';
import './ChannelList.scss';

import Channel from '../Channel';

import { IChannel } from '../Channel/types';
import { TChannelsList, IChannelListProps } from './types';

export const ChannelList = ({
  className,
  activeChannelId,
  channelsList,
  onChannelChange
}: IChannelListProps) => {
  const sortedChannelsList: TChannelsList = channelsList.sort((a: IChannel, b: IChannel) => {
    if (a.lastMessage === undefined || b.lastMessage === undefined) return 1;
    return b.lastMessage.date - a.lastMessage.date;
  });

  return (
    <div className={`${className} channel-list`}>
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
