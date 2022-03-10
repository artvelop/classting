import { api } from './sendApi';

export const questionApi = {
  list: async (params: any) => {
    return await api.get('/api.php', params);
  },
};
