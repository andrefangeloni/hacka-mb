import React from 'react';

import i18n from '../../i18n';

import PrimaryButton from '../../components/Button/Primary';

import * as S from './styles';

const OnboardingStepOne = ({ navigation }) => (
  <S.Container>
    <S.Main>
      <S.ImageWrapper>
        <S.FirstImage />
      </S.ImageWrapper>

      <S.Title>{i18n.t('onboardingOneTitle')}</S.Title>
      <S.Description>{i18n.t('onboardingOneDescription')}</S.Description>
    </S.Main>

    <S.Footer>
      <PrimaryButton
        text={i18n.t('next')}
        onPress={() => navigation.navigate('OnboardingStepTwo')}
      />
    </S.Footer>
  </S.Container>
);

export default OnboardingStepOne;
