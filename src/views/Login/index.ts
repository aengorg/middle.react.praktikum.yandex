import { Login as LoginComponent } from './Login';
import { withRouter } from 'react-router-dom';
import { withLocalization } from '../../containers/localization';

export const Login = withLocalization(withRouter(LoginComponent));
