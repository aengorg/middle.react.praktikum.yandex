import { TMessagesList } from '../../types';

interface OwnProps {
  messagesList: TMessagesList;
  className?: string;
  initLastDay?: number;
}

export type Props = OwnProps;
