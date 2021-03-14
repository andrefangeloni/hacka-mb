import React from 'react';

import { colors } from '../../themes';

import { Input } from './styles';

const TextInput = ({
  value,
  maxLength,
  reference,
  placeholder,
  blurOnSubmit,
  keyboardType,
  onChangeText,
  returnKeyType,
  autoCapitalize,
  onSubmitEditing,
  secureTextEntry,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <Input
      value={value}
      ref={reference}
      autoCorrect={false}
      isFocused={isFocused}
      maxLength={maxLength || 40}
      onChangeText={onChangeText}
      blurOnSubmit={blurOnSubmit}
      returnKeyType={returnKeyType}
      placeholder={placeholder || ''}
      onSubmitEditing={onSubmitEditing}
      secureTextEntry={secureTextEntry}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      placeholderTextColor={colors.TEXT}
      keyboardType={keyboardType || 'default'}
      autoCapitalize={autoCapitalize || 'none'}
    />
  );
};

export default TextInput;
