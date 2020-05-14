import React, { Component } from 'react';
import { TextField } from '../../components/UI/TextField';
import { Button } from '../../components/UI/Button';
import { Link } from 'react-router-dom';
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg';
import './Registration.scss';

import * as UsersAPI from '../../api/users';

import { Props, State } from './types';
import { ILoginUser } from '../../types';

export class Registration extends Component<Props, State> {
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
    this.resetErrors();
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

    this.resetErrors();

    const user: ILoginUser = {
      username: this.state.username,
      password: this.state.password,
    };

    const approvedUser = await UsersAPI.registration(user);
    if (approvedUser) {
      loginUser(approvedUser);
      history.replace('/chat');
    } else {
      this.addError(errors.omg500);
    }
  };

  private submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  private rulesUsername = async (
    e: React.FocusEvent<HTMLInputElement>
  ): Promise<void> => {
    e.preventDefault();
    const { username } = this.state;
    const { rules } = this.props.localization;

    if (username) {
      const isUserDuplication = await UsersAPI.checkUser(username);
      if (isUserDuplication) this.addError(rules.userDuplication);
    } else {
      this.addError(rules.requiredUser);
    }
  };

  private rulesPassword = async (
    e: React.FocusEvent<HTMLInputElement>
  ): Promise<void> => {
    e.preventDefault();
    const { password } = this.state;
    const { rules } = this.props.localization;

    if (!password) {
      this.addError(rules.requiredPassword);
    }
  };

  public render() {
    const { localization } = this.props;
    const { errors, username, password } = this.state;

    return (
      <div className="registration">
        <form className="form" onSubmit={this.submit}>
          <AddIcon className="form__icon" />
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
            onBlur={this.rulesUsername}
            onChange={this.handlerOnChangeUsername}
          />
          <label className="form__label">{localization.password}</label>
          <TextField
            className="form__pass"
            type="password"
            name="password"
            placeholder={localization.password}
            value={password}
            onBlur={this.rulesPassword}
            onChange={this.handlerOnChangePassword}
          />
          <Button className="form__button--login" onClick={this.send}>
            {localization.registration}
          </Button>
          <Button className="form__button--registration">
            <Link to="/login">{localization.login}</Link>
          </Button>
        </form>
      </div>
    );
  }
}
