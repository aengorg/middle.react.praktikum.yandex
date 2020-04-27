import React from 'react';
import './MessageList.scss';

import genKey from '../../utils/generation';
import { IMessage } from '../Message/Message/types';
import { TMessagesList } from './types';
import { Message } from '../Message/Message/Message';
import { DateSeparator } from '../Message/DateSeparator/DateSeparator';

// types
interface IProps {
  className: string;
  messagesList: TMessagesList;
}

// component
let currentDay: number = 0;
const renderDate = (date: number) => {
  let day: number = new Date(date).getDate();
  if (day !== currentDay) {
    currentDay = day;
    return <DateSeparator key={genKey()} date={date} />;
  }
};

export const MessageList = ({ className, messagesList }: IProps) => {
  return (
    <div className={className + ' message-list'}>
      {messagesList.map((message: IMessage) => (
        <React.Fragment key={genKey()}>
          {renderDate(message.message.date)}
          <Message key={message.message.id} {...message} />
        </React.Fragment>
      ))}
    </div>
  );
};
