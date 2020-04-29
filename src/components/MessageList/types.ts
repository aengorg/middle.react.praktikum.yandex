import { IMessage } from '../Message/Message/types';

export type TMessagesList = IMessage[];
export interface IMessageListProps {
  className: string;
  messagesList: TMessagesList;
}
