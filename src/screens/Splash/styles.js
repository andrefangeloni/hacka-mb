import styled from 'styled-components/native';

import logo from '../../assets/images/lorem-ipsum-logo.png';

import { colors } from '../../themes';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${colors.BACKGROUND};
`;

export const LogoWrapper = styled.View`
  width: 100%;
  height: 200px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
  source: logo,
})`
  width: 100%;
  height: 100%;
`;
