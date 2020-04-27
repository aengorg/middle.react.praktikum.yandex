import React from 'react';
import './Message.css';

import { IMessageContent, IUser } from './types';
import { formatTime } from '../../../utils/format';
import { Avatar } from '../../UI/Avatar/Avatar';

// types
interface Props {
  message: IMessageContent;
  user: IUser;
}

// component
export const Message = ({ message, user }: Props) => {
  const time: string = formatTime(message.date);

  return (
    <div className='message'>
      <Avatar className='message-avatar' avatar={user.avatar} title={user.name} />
      <div className='message-body'>
        <span className='message-user-name'>{user.name}</span>
        <span>{message.content}</span>
        <span className='message-time'>{time}</span>
      </div>
    </div>
  );
};
