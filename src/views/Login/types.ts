import { RouteComponentProps } from 'react-router-dom';
import { LocalizationProp } from '../../containers/localization';
import { IUser } from '../../types';

interface RouteProps {}

interface OwnProps {
  loginUser(user: IUser): void;
}

export type Props = OwnProps &
  LocalizationProp &
  RouteComponentProps<RouteProps>;

export type State = {
  errors: string[];
  username: string;
  password: string;
};
