import { settings } from '@constants/settings';
import axios from 'axios';

export const api = {
  get: async (url: string, params: any) => {
    return axios.get(settings.apiUrl + url, { params });
  },
};
