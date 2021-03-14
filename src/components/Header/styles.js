import styled from 'styled-components/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors, fonts } from '../../themes';

export const Container = styled.View``;

export const BackButton = styled.TouchableOpacity`
  margin: 20px 0;
`;

export const Back = styled(Ionicons).attrs({
  name: 'arrow-back',
  size: 32,
  color: colors.TITLE,
})``;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  color: ${colors.TITLE};
  font-family: ${fonts.POPPINS_BOLD};
`;
