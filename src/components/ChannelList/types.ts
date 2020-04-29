import { IChannel, TChannelId } from '../Channel/types';

export type TChannelsList = IChannel[];
export interface IChannelListProps {
  activeChannelId: TChannelId;
  channelsList: TChannelsList;
  onChannelChange(TChannelId: TChannelId): void;
  className?: string;
}
