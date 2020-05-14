import React, { Component } from 'react';
import { TextField } from '../../components/UI/TextField';
import { Button } from '../../components/UI/Button';
import { Link } from 'react-router-dom';
import { ReactComponent as AccountIcon } from '../../assets/icons/account.svg';
import './Login.scss';

import * as UsersAPI from '../../api/users';

import { Props, State } from './types';
import { ILoginUser } from '../../types';

export class Login extends Component<Props, State> {
  public state: State = {
    errors: [],
    username: '',
    password: '',
  };

  private handlerOnChangeUsername = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ username: value });
  };

  private handlerOnChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ password: value });
  };

  private resetErrors = (): void => {
    this.setState({ errors: [] });
  };

  private addError = (error: string): void => {
    this.setState((state) => {
      return { errors: [...state.errors, error] };
    });
  };

  private send = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();

    const { errors } = this.props.localization;
    const { history, loginUser } = this.props;
    console.log(this.props);

    this.resetErrors();

    const user: ILoginUser = {
      username: this.state.username,
      password: this.state.password,
    };

    const loginedUser = await UsersAPI.login(user);
    if (loginedUser) {
      console.log(loginUser);

      loginUser(loginedUser);
      history.replace('/chat');
    } else {
      this.addError(errors.login);
    }
  };

  private submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  public render() {
    const { localization } = this.props;
    const { errors, username, password } = this.state;

    return (
      <div className="login">
        <form className="form" onSubmit={this.submit}>
          <AccountIcon className="form__icon" />
          {errors.length ? (
            <ul className="form__errors animation-shake">
              {errors.map((error: string, i: number) => (
                <li key={i.toString()}>{error}</li>
              ))}
            </ul>
          ) : null}
          <label className="form__label">{localization.login}</label>
          <TextField
            className="form__name"
            type="text"
            name="username"
            placeholder={localization.username}
            value={username}
            onChange={this.handlerOnChangeUsername}
          />
          <label className="form__label">{localization.password}</label>
          <TextField
            className="form__pass"
            type="password"
            name="password"
            placeholder={localization.password}
            value={password}
            onChange={this.handlerOnChangePassword}
          />
          <Button className="form__button--login" onClick={this.send}>
            {localization.login}
          </Button>
          <Button className="form__button--registration">
            <Link to="/registration">{localization.registration}</Link>
          </Button>
        </form>
      </div>
    );
  }
}
