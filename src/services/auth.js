import { getInstance } from './api';

export const login = async (payload) => {
  const api = await getInstance();
  const { data } = await api.post('/auth/login-email', payload);

  return data;
};

export const forgotPassword = async (email) => {
  const api = await getInstance();
  const { data } = await api.post('/auth/send-reset-email', email);

  return data;
};

export const resendEmail = async (payload) => {
  const api = await getInstance();
  const { data } = await api.post('/auth/resend-confirmation-email', payload);

  return data;
};
