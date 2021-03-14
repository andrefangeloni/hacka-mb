import styled from 'styled-components/native';

import { colors, fonts } from '../../themes';

import onboardingOne from '../../assets/images/onboarding-one.png';
import onboardingTwo from '../../assets/images/onboarding-two.png';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: ${colors.BACKGROUND};
`;

export const Main = styled.View`
  flex: 1;
`;

export const ImageWrapper = styled.View`
  width: 100%;
  height: 200px;
  margin: 80px 0;
`;

export const FirstImage = styled.Image.attrs({
  resizeMode: 'contain',
  source: onboardingOne,
})`
  width: 100%;
  height: 100%;
`;

export const SecondImage = styled.Image.attrs({
  resizeMode: 'contain',
  source: onboardingTwo,
})`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 20px;
  color: ${colors.TITLE};
  font-family: ${fonts.POPPINS_BOLD};
`;

export const Description = styled.Text`
  text-align: center;
  margin-bottom: 20px;
  color: ${colors.TITLE};
  font-family: ${fonts.POPPINS_REGULAR};
`;

export const Footer = styled.View`
  margin-bottom: 40px;
`;
