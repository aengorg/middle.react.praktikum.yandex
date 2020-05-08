import { Chat as ChatComponent } from './Chat';

import { withRouter } from 'react-router';
import { withLogger } from '../../containers/logger';

export const Chat = withRouter(withLogger(ChatComponent));
