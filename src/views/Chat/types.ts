import { RouteComponentProps } from 'react-router';
import { TMessagesList, TChannelId, TChannelsList, IUser } from '../../types';
import { LocalizationProp } from '../../containers/localization';

interface OwnProps {
  user: IUser;
  logoutUser(): void;
}

interface RouteProps {
  channelId: TChannelId;
}

export type Props = OwnProps &
  RouteComponentProps<RouteProps> &
  LocalizationProp;

export interface State {
  activeChannelId: TChannelId;
  channels: TChannelsList;
  messages: TMessagesList;
}
