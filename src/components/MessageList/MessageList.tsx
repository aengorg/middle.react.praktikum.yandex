import React, { Component, Fragment } from 'react';
import './MessageList.scss';

import { genKey } from '../../utils/generation';
import { Message } from '../Message/Message';
import { DateSeparator } from '../Message/DateSeparator';

import { IMessage } from '../../types';
import { Props, State } from './types';

export class MessageList extends Component<Props, State> {
  private renderDate = (currentMsg: IMessage, lastMsg: IMessage | undefined) => {
    if (lastMsg) {
      const dayCurrentMsg: number = new Date(currentMsg.message.date).getDate();
      const dayLastMsg: number = new Date(lastMsg.message.date).getDate();
      if (dayCurrentMsg === dayLastMsg) return null;
    }
    return <DateSeparator date={currentMsg.message.date} />;
  };

  private renderMessage = (currentMsg: IMessage, lastMsg: IMessage | undefined) => {
    const isSameUser: boolean = lastMsg !== undefined && currentMsg.user.id === lastMsg.user.id;
    return <Message {...currentMsg} short={isSameUser} />;
  };

  public render() {
    const {messagesList, className} = this.props;

    return (
      <div className={`${className} message-list`}>
        {messagesList.map((msg: IMessage, i: number) => (
          <Fragment key={genKey()}>
            {this.renderDate(msg, messagesList[i - 1])}
            {this.renderMessage(msg, messagesList[i - 1])}
          </Fragment>
        ))}
      </div>
    );
  }
}
