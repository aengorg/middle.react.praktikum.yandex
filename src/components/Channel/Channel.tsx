import React from 'react';
import './Channel.css';

import { TChannelId, IChannel } from './types';
import { formatDateRU } from '../../utils/format';
import { Avatar } from '../UI/Avatar/Avatar';

// types
interface IProps extends IChannel {
  isSelected: boolean;
  onChannelChange(TChannelId: TChannelId): void;
}

// component
export const Channel = ({
  id,
  title,
  avatar,
  lastMessage,
  isSelected,
  onChannelChange
}: IProps) => {
  let formattedDate: string = '';
  if (lastMessage) {
    formattedDate = formatDateRU(lastMessage.date);
  }

  const classes: string = `channel ${isSelected ? 'channel--active' : ''}`;

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
