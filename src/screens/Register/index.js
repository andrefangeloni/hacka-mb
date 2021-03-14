import React from 'react';

import i18n from '../../i18n';

import Header from '../../components/Header/BackHeader';
import TextInput from '../../components/TextInput';
import PrimaryButton from '../../components/Button/Primary';

import {
  onlyEmail,
  customLetters,
  alphanumericWithAccents,
} from '../../utils/masked-input';

import * as S from './styles';

const Register = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const confirmPasswordRef = React.useRef();

  const onSignUp = () => navigation.navigate('OnboardingStepOne');

  return (
    <S.Container>
      <Header
        title={i18n.t('register')}
        onBackPress={() => navigation.goBack()}
      />

      <S.InputsContainer>
        <S.TextInputWrapper>
          <TextInput
            value={name}
            returnKeyType="next"
            blurOnSubmit={false}
            autoCapitalize="words"
            placeholder={i18n.t('name')}
            onSubmitEditing={() => emailRef.current.focus()}
            onChangeText={(text) => setName(alphanumericWithAccents(text))}
          />
        </S.TextInputWrapper>

        <S.TextInputWrapper>
          <TextInput
            value={email}
            returnKeyType="next"
            blurOnSubmit={false}
            reference={emailRef}
            keyboardType="email-address"
            placeholder={i18n.t('email')}
            onChangeText={(text) => setEmail(onlyEmail(text))}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
        </S.TextInputWrapper>

        <S.TextInputWrapper>
          <TextInput
            secureTextEntry
            value={password}
            returnKeyType="next"
            reference={passwordRef}
            placeholder={i18n.t('password')}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            onChangeText={(text) => setPassword(customLetters(text))}
          />
        </S.TextInputWrapper>

        <TextInput
          secureTextEntry
          returnKeyType="send"
          value={confirmPassword}
          onSubmitEditing={() => {}}
          reference={confirmPasswordRef}
          placeholder={i18n.t('confirmPassword')}
          onChangeText={(text) => setConfirmPassword(customLetters(text))}
        />
      </S.InputsContainer>

      <S.TermsContainer>
        <S.TermsDescription>
          {i18n.t('termsOfUseDescription')}{' '}
          <S.TermsOfUse onPress={() => {}}>{i18n.t('termsOfUse')}</S.TermsOfUse>
        </S.TermsDescription>
      </S.TermsContainer>

      <S.Footer>
        <PrimaryButton
          text={i18n.t('createAccount')}
          onPress={() => onSignUp()}
        />
      </S.Footer>
    </S.Container>
  );
};

export default Register;
