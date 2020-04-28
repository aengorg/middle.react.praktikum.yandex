// import { API_URL } from '../constants';
// import { http, IHttpResponse } from '../utils/http';

import { TChannelsList } from '../components/ChannelList/types';

import testChannels from './static/channels.json';

export const getChannels = async (): Promise<TChannelsList> => {
  // let data: IHttpResponse<any>;
  try {
    // data = await http<any>(
    //   `${API_URL}/chennals`
    // );
    // return data;
    return testChannels;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default {
  getChannels
};
