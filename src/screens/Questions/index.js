import React from 'react';

import i18n from '../../i18n';

import * as S from './styles';

const Questions = () => {
  return (
    <S.Container>
      <S.TextDescription>
        {`${i18n.t('questionScreenDesc')}?`}
      </S.TextDescription>

      <S.TextDescription>
        {i18n.t('questionScreenDescTwo')}{' '}
        <S.Bold>{i18n.t('privateAndSafe')}</S.Bold>
      </S.TextDescription>

      <S.Main>
        <S.Question>{`${i18n.t('whatIsYourFieldOfActivity')}?`}</S.Question>
      </S.Main>
    </S.Container>
  );
};

export default Questions;
