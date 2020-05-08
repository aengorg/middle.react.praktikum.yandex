import { TChannelId, TChannelsList } from '../../types';

interface OwnProps {
  activeChannelId: TChannelId;
  channelsList: TChannelsList;
  onChannelChange(TChannelId: TChannelId): void;
  className?: string;
}

export type Props = OwnProps;
