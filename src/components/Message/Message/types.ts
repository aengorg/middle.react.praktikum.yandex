export type TUserId = string;
export type TMessageId = string;

export interface IUser {
  id: TUserId;
  name: string;
  avatar: string;
}

export interface IMessageContent {
  id: TMessageId;
  date: number;
  content: string;
}

export interface IMessage {
  user: IUser;
  message: IMessageContent;
}

export interface IMessageProps {
  message: IMessageContent;
  user: IUser;
}
