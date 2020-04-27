import React from 'react';
import './Channel.scss';

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

  const classes: string = isSelected ? 'channel--active' : '';

  return (
    <div className={`channel ${classes}`} onClick={() => onChannelChange(id)}>
      <Avatar className='channel__avatar' avatar={avatar} title={title} />
      <div className='channel__body'>
        <div className='channel__header'>
          <span className='channel__title'>{title}</span>
          <span className='channel__date'>{formattedDate}</span>
        </div>
        {lastMessage ? (
          <div className='channel__footer'>
            <span className='channel__user-name'>{lastMessage.userName}</span>
            {` : `}
            <span className='channel__message'>{lastMessage.text}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};