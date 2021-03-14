import React from 'react';

import i18n from '../../i18n';

import PrimaryButton from '../../components/Button/Primary';

import * as S from './styles';

const OnboardingStepTwo = () => (
  <S.Container>
    <S.Main>
      <S.ImageWrapper>
        <S.SecondImage />
      </S.ImageWrapper>

      <S.Title>{i18n.t('onboardingTwoTitle')}</S.Title>
      <S.Description>{i18n.t('onboardingTwoDescription')}</S.Description>
    </S.Main>

    <S.Footer>
      <PrimaryButton text={i18n.t('start')} onPress={() => {}} />
    </S.Footer>
  </S.Container>
);

export default OnboardingStepTwo;
