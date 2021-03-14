import { UserActions } from '../actions';
import { RootNavigation } from '../../routes';
import { AuthServices } from '../../services';
import Storage, { keys } from '../../data/storage';

export const login = (data) => {
  return async (dispatch) => {
    try {
      const { user, token, refreshToken } = await AuthServices.login(data);

      await Storage.storeMultiple([
        [keys.UID, user.uid],
        [keys.TOKEN, token],
        [keys.REFRESH_TOKEN, refreshToken],
      ]);

      dispatch(UserActions.getMe());
    } catch (err) {
      throw err;
    }
  };
};

export const forgotPassword = (email) => {
  return async () => {
    try {
      await AuthServices.forgotPassword(email);
    } catch (err) {
      throw err;
    }
  };
};

export const resendEmail = (data) => {
  return async () => {
    try {
      await AuthServices.resendEmail(data);
    } catch (err) {
      throw err;
    }
  };
};

export const logout = () => {
  return async () => {
    await Storage.removeMultiple([keys.UID, keys.TOKEN, keys.REFRESH_TOKEN]);

    RootNavigation.reset(0, 'Landing');
  };
};
