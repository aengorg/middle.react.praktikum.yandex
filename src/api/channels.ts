// import { API_URL } from '../constants';
// import { http, IHttpResponse } from '../utils/http';

import testChannels from './static/channels.json';

export const getChannels = async () => {
  // let data: IHttpResponse<any>;
  try {
    // data = await http<any>(
    //   `${API_URL}/chennals`
    // );
    // return data;
    return testChannels;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getChannels
};
