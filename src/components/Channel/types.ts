import { TChannelId, IChannel } from '../../types';

interface OwnProps {
  isSelected: boolean;
  onChannelChange(TChannelId: TChannelId): void;
  className?: string;
}

export type Props = OwnProps & IChannel;
