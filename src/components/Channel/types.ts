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
