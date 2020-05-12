import { LocalizationProp } from '../../containers/localization';

interface OwnProps {
  className?: string;
  sendMessage(text: string): void;
}

// ? не получчилось добавить тип в хоке пришлось указывать тут
// LocalizationProp
export type Props = OwnProps & LocalizationProp;

export interface State {
  draftMessage: string;
  textareaRowsCount: number;
}
