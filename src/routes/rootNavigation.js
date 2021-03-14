import React from 'react';

export const navigationRef = React.createRef();

export const navigate = (name, params) =>
  navigationRef.current?.navigate(name, params);

export const reset = (index, name, params) =>
  navigationRef.current?.reset({ index, routes: [{ name }], params });
