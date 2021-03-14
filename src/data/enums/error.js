import i18n from '../../i18n';

const error = {
  INVALID_EMAIL: 'invalid-email',
  NETWORK_ERROR: 'Network Error',
  WEAK_PASSWORD: 'weak-password',
  USER_NOT_FOUND: 'user-not-found',
  WRONG_PASSWORD: 'wrong-password',
  UNEXPECTED_ERROR: 'unexpected-error',
  EMAIL_NOT_VERIFIED: 'email-not-verified',
  EMAIL_ALREADY_IN_USE: 'email-already-in-use',
};

export const typeError = new Map([
  [error.INVALID_EMAIL, i18n.t('invalidEmail')],
  [error.NETWORK_ERROR, i18n.t('networkError')],
  [error.WEAK_PASSWORD, i18n.t('weakPassword')],
  [error.USER_NOT_FOUND, i18n.t('userNotFound')],
  [error.WRONG_PASSWORD, i18n.t('wrongPassword')],
  [error.UNEXPECTED_ERROR, i18n.t('unexpectedError')],
  [error.EMAIL_NOT_VERIFIED, i18n.t('emailNotVerified')],
  [error.EMAIL_ALREADY_IN_USE, i18n.t('emailAlreadyInUse')],
]);

export default error;
