import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

import { colors, fonts } from '../../themes';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.BACKGROUND};
`;

export const LogoWrapper = styled.View`
  width: 100%;
  height: 140px;
  margin: 80px 0;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
  source: logo,
})`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: ${colors.WHITE};
  text-align: center;
  font-size: 48px;
  font-family: ${fonts.ASTRO_SPACE};
`;
