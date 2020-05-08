import React from 'react';
import './Message.scss';

import { formatTime } from '../../../utils/format';
import { Avatar } from '../../UI/Avatar';

import { Props } from './types';

export const Message = ({ message, user, short = false }: Props) => {
  const time: string = formatTime(message.date);

  return (
    <div className={`message ${short ? 'message--short' : ''}`}>
      {!short ? (
        <Avatar
          className="message__avatar"
          avatar={user.avatar}
          title={user.name}
        />
      ) : (
        <div className="message__avatar--hide"></div>
      )}
      <div className="message__body">
        {!short ? (
          <span className="message__user-name">{user.name}</span>
        ) : null}
        <span>{message.content}</span>
      </div>
      <span className="message__time">{time}</span>
    </div>
  );
};
