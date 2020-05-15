import { LocalizationProp } from '../../containers/localization';

interface OwnProps {
  className?: string;
  sendMessage(text: string): void;
}

export type Props = OwnProps & LocalizationProp;

export interface State {
  draftMessage: string;
  textareaRowsCount: number;
}
