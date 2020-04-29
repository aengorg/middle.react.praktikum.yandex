import React from 'react';
import './Message.scss';

import { formatTime } from '../../../utils/format';
import { Avatar } from '../../UI/Avatar';

import { IMessageProps } from './types';

export const Message = ({ message, user }: IMessageProps) => {
  const time: string = formatTime(message.date);

  return (
    <div className='message'>
      <Avatar className='message__avatar' avatar={user.avatar} title={user.name} />
      <div className='message__body'>
        <span className='message__user-name'>{user.name}</span>
        <span>{message.content}</span>
        <span className='message__time'>{time}</span>
      </div>
    </div>
  );
};
