import { LocalizationProp } from '../../containers/localization';
import { IUser } from '../../types';

interface OwnProps {
  user: IUser;
  logoutUser(): void;
  className?: string;
}

export type Props = OwnProps & LocalizationProp;
