import React from 'react';

import * as S from './styles';

const BackHeader = ({ title, onBackPress }) => (
  <S.Container>
    <S.BackButton onPress={onBackPress}>
      <S.Back />
    </S.BackButton>

    <S.HeaderTitle>{title}</S.HeaderTitle>
  </S.Container>
);

export default BackHeader;
