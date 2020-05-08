import { MessageList as MessageListComponent } from './MessageList';

import { memo } from 'react';
import { withLogger } from '../../containers/logger';

export const MessageList = withLogger(memo(MessageListComponent));
