import React from 'react';
import './MessageList.scss';

import { genKey } from '../../utils/generation';
import { Message } from '../Message/Message';
import { DateSeparator } from '../Message/DateSeparator';

import { IMessage, TUserId } from '../../types';
import { Props } from './types';

let lastDay: number = 0;
const renderDate = (date: number) => {
  let day: number = new Date(date).getDate();
  if (day !== lastDay) {
    lastDay = day;
    return <DateSeparator key={genKey()} date={date} />;
  }
};

let lastUserId: TUserId = '';
const renderMessage = (msg: IMessage) => {
  const isSameUser: boolean = msg.user.id === lastUserId;
  if (!isSameUser) lastUserId = msg.user.id;
  return <Message {...msg} short={isSameUser} />;
};

export const MessageList = ({ className, messagesList }: Props) => {
  lastDay = 0;
  lastUserId = '';

  return (
    <div className={`${className} message-list`}>
      {messagesList.map((msg: IMessage) => (
        <React.Fragment key={genKey()}>
          {renderDate(msg.message.date)}
          {renderMessage(msg)}
        </React.Fragment>
      ))}
    </div>
  );
};
