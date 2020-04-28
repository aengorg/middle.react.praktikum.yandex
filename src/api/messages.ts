// import { API_URL } from '../constants';
// import { http, IHttpResponse } from '../utils/http';
import { TChannelId } from '../components/Channel/types';
import { TMessagesList } from '../components/MessageList/types';

import testMessages1 from './static/messages-1.json';
import testMessages2 from './static/messages-2.json';
import testMessages3 from './static/messages-3.json';
import testMessages4 from './static/messages-4.json';

const testMessages = [testMessages1, testMessages2, testMessages3, testMessages4];

export const getMessages = async (channelId: TChannelId): Promise<TMessagesList> => {
  // let data: IHttpResponse<any>;
  try {
    // data = await http<any>(
    //   `${API_URL}/chennals`s
    // );
    // return data;
    return testMessages[Number(channelId)];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default {
  getMessages
};
