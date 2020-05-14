import { RouteComponentProps } from 'react-router-dom';
import { LocalizationProp } from '../../containers/localization';

interface RouteProps {}

interface OwnProps {}

export type Props = OwnProps &
  LocalizationProp &
  RouteComponentProps<RouteProps>;

export type State = {
  username: string;
  password: string;
};
