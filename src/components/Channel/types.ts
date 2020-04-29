export type TChannelId = string;

export interface ILastMessage {
  userName: string;
  text: string;
  date: number;
}

export interface IChannel {
  id: TChannelId;
  title: string;
  avatar: string;
  lastMessage?: ILastMessage;
}

export interface IChannelProps extends IChannel {
  isSelected: boolean;
  onChannelChange(TChannelId: TChannelId): void;
  className: string;
}
