import axios from 'axios';

import i18n from '../i18n';

import error, { typeError } from '../data/enums/error';

import Storage, { keys } from '../data/storage';

import store from '../redux';

import { BASE_URL } from '../../env.json';
import { AuthActions } from '../redux/actions';

export const getInstance = async () => {
  const token = await Storage.find(keys.TOKEN);

  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: { token },
  });

  instance.interceptors.response.use(
    (res) => res,
    async (err) => {
      if (err.message === error.NETWORK_ERROR) {
        throw new Error(i18n.t('networkError'));
      }

      if (err.response.data.error) {
        throw new Error(
          typeError.get(err.response.data.error) || i18n.t('genericError'),
        );
      }

      if (err.response.status === 401) {
        await store.dispatch(AuthActions.logout());
      }
    },
  );

  return instance;
};
