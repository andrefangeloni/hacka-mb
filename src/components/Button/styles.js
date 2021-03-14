import styled from 'styled-components/native';

import { colors, fonts } from '../../themes';

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || colors.PRIMARY};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  font-family: ${({ socialButton }) =>
    socialButton ? fonts.POPPINS_REGULAR : fonts.POPPINS_BOLD};
  color: ${({ textColor }) => textColor || colors.TITLE};
`;

export const IconWrapper = styled.View`
  position: absolute;
  left: 20px;
`;
