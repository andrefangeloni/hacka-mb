import styled from 'styled-components/native';

import { colors, fonts } from '../../themes';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${colors.BACKGROUND};
`;

export const TextDescription = styled.Text`
  margin-top: 20px;
  color: ${colors.WHITE};
  font-family: ${fonts.POPPINS_REGULAR};
`;

export const Bold = styled.Text`
  color: ${colors.WHITE};
  font-family: ${fonts.POPPINS_BOLD};
`;

export const Main = styled.View`
  flex: 1;
  margin-top: 30px;
`;

export const Question = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${colors.TITLE};
  font-family: ${fonts.POPPINS_BOLD};
`;
