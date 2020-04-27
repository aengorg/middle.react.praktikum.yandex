import React from 'react';
import './Channel.css';

import { TChannelId, IChannel } from './types';
import { formatDateRU } from '../../utils/format';
import { Avatar } from '../UI/Avatar/Avatar';

// types
interface IProps {
  activeChannelId: TChannelId;
  channel: IChannel;
  onChannelChange: any;
}

// component
export const Channel = ({ channel, activeChannelId, onChannelChange }: IProps) => {
  const { id, title, avatar, lastMessage } = channel;

  const active: boolean = activeChannelId === id;

  let formattedDate: string = '';
  if (lastMessage) {
    formattedDate = formatDateRU(lastMessage.date);
  }

  const classes: string = `channel ${active ? 'channel--active' : ''}`;

  return (
    <div className={classes} onClick={() => onChannelChange(id)}>
      <Avatar className='channel__avatar' avatar={avatar} title={title} />
      <div className='channel-body'>
        <div className='channel-top'>
          <span className='channel__title'>{title}</span>
          <span className='channel__date'>{formattedDate}</span>
        </div>
        {lastMessage ? (
          <div className='channel-bottom'>
            <span className='channel__user-name'>{lastMessage.userName}</span>
            {` : `}
            <span className='channel__message'>{lastMessage.text}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};
