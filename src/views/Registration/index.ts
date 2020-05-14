import { Registration as RegistrationComponent } from './Registration';
import { withRouter } from 'react-router-dom';
import { withLocalization } from '../../containers/localization';

export const Registration = withLocalization(withRouter(RegistrationComponent));
