import { colors } from '../themes';

const defaultConfig = {
  bg: colors.BLACK,
  color: colors.WHITE,
  closeIconColor: colors.WHITE,
  closeButtonBgColor: colors.BLACK,
};

export const toastError = {
  intent: 'ERROR',
  borderColor: colors.ERROR,
  ...defaultConfig,
};

export const toastInfo = {
  intent: 'INFO',
  borderColor: colors.PRIMARY,
  ...defaultConfig,
};

export const toastSuccess = {
  intent: 'SUCCESS',
  borderColor: colors.SUCCESS,
  ...defaultConfig,
};
