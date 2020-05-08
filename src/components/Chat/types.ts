import { RouteComponentProps } from 'react-router';
import { TMessagesList, TChannelId, TChannelsList } from '../../types';

interface OwnProps {}

interface PathProps {
  channelId: TChannelId;
}

export type Props = OwnProps & RouteComponentProps<PathProps>;

export interface State {
  activeChannelId: TChannelId;
  channels: TChannelsList;
  messages: TMessagesList;
}
