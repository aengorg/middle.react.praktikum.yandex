import React, { Component } from 'react';
import './ChatInput.scss';
import { ReactComponent as IconSend } from '../../assets/icons/send.svg';

import { Props, State } from './types';

export class ChatInput extends Component<Props, State> {
  public state: Readonly<State> = {
    draftMessage: '',
    textareaRowsCount: 1,
  };

  private writeDraftMessage = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    e.preventDefault();
    this.setState({
      draftMessage: e.target.value,
    });
  };

  private clearInput = (): void => {
    this.setState({
      draftMessage: '',
      textareaRowsCount: 1,
    });
  };

  private stopDefaultEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter') e.preventDefault();
  };

  private addNewLineMessage = (): void => {
    this.setState((state) => {
      return {
        draftMessage: state.draftMessage + '\n',
        textareaRowsCount:
          state.textareaRowsCount < 3 ? state.textareaRowsCount + 1 : state.textareaRowsCount,
      };
    });
  };

  private handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    e.preventDefault();
    if (e.key === 'Enter' && e.shiftKey) {
      this.addNewLineMessage();
    } else if (e.key === 'Enter') {
      this.send();
    }
  };

  private onClickSend = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    this.send();
  };

  private send = (): void => {
    const { sendMessage } = this.props;
    const { draftMessage } = this.state;
    if (draftMessage !== '') {
      sendMessage(draftMessage);
      this.clearInput();
    }
  };

  public render() {
    const { className, localization } = this.props;
    const { textareaRowsCount, draftMessage } = this.state;

    return (
      <form className={`${className} chat-input`}>
        <textarea
          className="chat-input__textarea"
          name="textarea"
          value={draftMessage}
          rows={textareaRowsCount}
          onChange={this.writeDraftMessage}
          onKeyUp={this.handleKeyPress}
          onKeyDown={this.stopDefaultEnter}
        ></textarea>
        <button className="chat-input__button-send" onClick={this.onClickSend}>
          <IconSend className="button-send__icon-send" title={localization.send} />
        </button>
      </form>
    );
  }
}
