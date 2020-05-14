import React, { Component } from 'react';
import { TextField } from '../../components/UI/TextField';
import { Button } from '../../components/UI/Button';
import { Link } from 'react-router-dom';
import { ReactComponent as AccountIcon } from '../../assets/icons/account.svg';
import './Login.scss';

import { Props, State } from './types';

export class Login extends Component<Props, State> {
  public state: State = {
    username: '',
    password: '',
  };

  private handlerOnChangeUsername = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ username: value });
  };

  private handlerOnChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ password: value });
  };

  public render() {
    const { localization } = this.props;
    const { username, password } = this.state;

    return (
      <div className="login">
        <form className="form">
          <AccountIcon className="form__icon" />
          <label className="form__label">{localization.login}</label>
          <TextField
            className="form__name"
            type="text"
            name="username"
            placeholder={localization.username}
            value={username}
            onChange={this.handlerOnChangeUsername}
          />
          <label className="form__label">{localization.pass}</label>
          <TextField
            className="form__pass"
            type="password"
            name="password"
            placeholder={localization.password}
            value={password}
            onChange={this.handlerOnChangePassword}
          />
          <Button className="form__button--login">{localization.login}</Button>
          <Button className="form__button--registration">
            <Link to="/registration">{localization.registration}</Link>
          </Button>
        </form>
      </div>
    );
  }
}
