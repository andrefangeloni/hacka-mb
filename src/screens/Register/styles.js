import styled from 'styled-components/native';

import { colors, fonts } from '../../themes';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: ${colors.BACKGROUND};
`;

export const InputsContainer = styled.View`
  margin: 30px 0;
`;

export const TextInputWrapper = styled.View`
  margin-bottom: 20px;
`;

export const TermsContainer = styled.View`
  flex: 1;
`;

export const TermsDescription = styled.Text`
  margin-bottom: 20px;
  color: ${colors.TITLE};
  font-family: ${fonts.POPPINS_REGULAR};
`;

export const TermsOfUse = styled.Text`
  color: ${colors.PRIMARY};
  text-decoration-line: underline;
  font-family: ${fonts.POPPINS_REGULAR};
`;

export const Footer = styled.View`
  margin-bottom: 40px;
`;
