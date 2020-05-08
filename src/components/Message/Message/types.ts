import { IUser, IMessageContent } from '../../../types';

interface OwnProps {
  message: IMessageContent;
  user: IUser;
}

export type Props = OwnProps;
