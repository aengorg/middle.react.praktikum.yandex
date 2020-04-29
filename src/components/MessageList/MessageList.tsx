import React from 'react';
import './MessageList.scss';

import genKey from '../../utils/generation';
import Message from '../Message/Message';
import DateSeparator from '../Message/DateSeparator';

import { IMessage } from '../Message/Message/types';
import { IMessageListProps } from './types';

let currentDay: number = 0;
const renderDate = (date: number) => {
  let day: number = new Date(date).getDate();
  if (day !== currentDay) {
    currentDay = day;
    return <DateSeparator key={genKey()} date={date} />;
  }
};

export const MessageList = ({ className, messagesList }: IMessageListProps) => {
  return (
    <div className={className + ' message-list'}>
      {messagesList.map((msg: IMessage) => (
        <React.Fragment key={genKey()}>
          {renderDate(msg.message.date)}
          <Message key={msg.message.id} {...msg} />
        </React.Fragment>
      ))}
    </div>
  );
};
