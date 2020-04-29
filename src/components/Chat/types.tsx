import { TChannelId } from '../Channel/types';
import { TChannelsList } from '../ChannelList/types';
import { TMessagesList } from '../MessageList/types';

export interface IChatProps {}

export interface IChatState {
  activeChannelId: TChannelId;
  channels: TChannelsList;
  messages: TMessagesList;
}
