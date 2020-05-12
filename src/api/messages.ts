/**
 * Весь закомментированный код оставлен на будущую реализацию обращения к API сервиса
 */

// import { API_URL } from '../constants';
// import { http, IHttpResponse } from '../utils/http';
import { TChannelId, TMessagesList } from '../types';

import testMessages1 from './static/messages-Chicago.json';
import testMessages2 from './static/messages-Los-Angeles.json';
import testMessages3 from './static/messages-New-York.json';
import testMessages4 from './static/messages-San-Francisco.json';
import testMessages5 from './static/messages-Washington.json';

const testMessages = [testMessages1, testMessages2, testMessages3, testMessages4, testMessages5, []];

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
