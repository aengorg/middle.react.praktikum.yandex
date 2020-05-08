import { IUser, IMessageContent } from '../../../types';

interface OwnProps {
  user: IUser;
  short?: boolean;
  message: IMessageContent;
}

export type Props = OwnProps;
