import styled from 'styled-components/native';
import { colors, fonts } from '../../themes';

export const Input = styled.TextInput`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  padding-left: 10px;
  justify-content: center;
  color: ${colors.TITLE};
  border: 1px solid
    ${({ isFocused }) => (isFocused ? colors.PRIMARY : colors.BORDER)};
  font-family: ${fonts.POPPINS_REGULAR};
  background-color: ${colors.INPUT_BG};
`;
