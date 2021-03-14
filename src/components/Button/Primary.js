import React from 'react';

import { Button, ButtonText, IconWrapper } from './styles';

const PrimaryButton = ({
  icon,
  text,
  onPress,
  textColor,
  socialButton,
  backgroundColor,
}) => (
  <Button backgroundColor={backgroundColor} onPress={onPress}>
    {icon ? <IconWrapper>{icon}</IconWrapper> : null}

    <ButtonText textColor={textColor} socialButton={socialButton}>
      {text}
    </ButtonText>
  </Button>
);

export default PrimaryButton;
