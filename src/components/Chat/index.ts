import { Chat as ChatComponent } from './Chat';

import { withRouter } from 'react-router';
import { withLogger } from '../../containers/logger';
import { withLocalization } from '../../containers/localization'

export const Chat = withRouter(withLogger(withLocalization(ChatComponent)));
