import React from 'react';

import i18n from '../../i18n';

import * as S from './styles';

const Splash = ({ navigation }) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }, 2000);
  }, [navigation]);

  return (
    <S.Container>
      <S.LogoWrapper>
        <S.Logo />
      </S.LogoWrapper>

      <S.Title>{i18n.t('appName')}</S.Title>
    </S.Container>
  );
};

export default Splash;
