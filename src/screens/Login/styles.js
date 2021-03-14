import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';
import google from '../../assets/images/google-logo.png';

import { colors, fonts } from '../../themes';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: ${colors.BACKGROUND};
`;

export const LogoWrapper = styled.View`
  width: 40px;
  height: 40px;
  margin: 30px 0;
  align-self: flex-start;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
  source: logo,
})`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${colors.TITLE};
  font-family: ${fonts.POPPINS_BOLD};
`;

export const TextInputWrapper = styled.View`
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.View`
  margin: 30px 0;
`;

export const ForgotPasswordButton = styled.TouchableOpacity``;

export const ForgotPasswordButtonText = styled.Text`
  text-align: center;
  color: ${colors.TITLE};
  text-decoration-line: underline;
  font-family: ${fonts.POPPINS_REGULAR};
`;

export const RowCenter = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;

export const Or = styled.Text`
  margin: 0 10px;
  text-align: center;
  color: ${colors.TITLE};
  font-family: ${fonts.POPPINS_REGULAR};
`;

export const Line = styled.View`
  flex: 1;
  height: 2px;
  background-color: ${colors.BORDER};
`;

export const SocialButtonsWrapper = styled.View`
  flex: 1;
`;

export const GoogleLogoWrapper = styled.View`
  width: 20px;
  height: 20px;
`;

export const GoogleLogo = styled.Image.attrs({
  resizeMode: 'contain',
  source: google,
})`
  width: 100%;
  height: 100%;
`;

export const HaveAnAccountText = styled.Text`
  text-align: center;
  margin-bottom: 20px;
  color: ${colors.TITLE};
  font-family: ${fonts.POPPINS_REGULAR};
`;

export const RegisterText = styled.Text`
  color: ${colors.PRIMARY};
  text-decoration-line: underline;
  font-family: ${fonts.POPPINS_REGULAR};
`;
