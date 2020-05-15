import React, { Component, Fragment } from 'react';
import './MessageList.scss';

import { ONE_DAY } from '../../constants';

import { genKey } from '../../utils/generation';
import { Message } from '../Message/Message';
import { DateSeparator } from '../Message/DateSeparator';

import { IMessage } from '../../types';
import { Props, State } from './types';

export class MessageList extends Component<Props, State> {
  private refMessagesList: React.RefObject<HTMLDivElement> = React.createRef();

  private renderDate = (currentMsg: IMessage, lastMsg: IMessage | undefined) => {
    if (lastMsg) {
      const delta: Number = Math.abs(currentMsg.message.date - lastMsg.message.date);
      if (delta < ONE_DAY) return null;
    }
    return <DateSeparator date={currentMsg.message.date} />;
  };

  private renderMessage = (currentMsg: IMessage, lastMsg: IMessage | undefined) => {
    const isSameUser: boolean = lastMsg !== undefined && currentMsg.user.id === lastMsg.user.id;
    return <Message {...currentMsg} short={isSameUser} />;
  };

  private scrollBottom(): void {
    const scrollContainer = this.refMessagesList.current;
    scrollContainer &&
      scrollContainer.scrollTo({
        left: 0,
        top: scrollContainer.scrollHeight,
      });
  }

  public componentDidUpdate() {
    this.scrollBottom();
  }

  public render() {
    const { messagesList, className } = this.props;

    return (
      <div className={`${className} message-list`} ref={this.refMessagesList}>
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
