import React from 'react';

import { Input } from './styles';

const TextInput = ({ value, onChange, placeholder }) => (
  <Input value={value} onChange={onChange} placeholder={placeholder} />
);

export default TextInput;
