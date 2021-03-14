import React from 'react';
import { Platform } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import i18n from '../../i18n';

import TextInput from '../../components/TextInput';
import PrimaryButton from '../../components/Button/Primary';

import { onlyEmail, customLetters } from '../../utils/masked-input';

import * as S from './styles';
import { colors } from '../../themes';

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const passwordRef = React.useRef();

  const onLogin = () => {};

  return (
    <S.Container>
      <S.LogoWrapper>
        <S.Logo />
      </S.LogoWrapper>

      <S.Title>{i18n.t('doYourLogin')}</S.Title>

      <S.TextInputWrapper>
        <TextInput
          value={email}
          returnKeyType="next"
          blurOnSubmit={false}
          keyboardType="email-address"
          placeholder={i18n.t('email')}
          onChangeText={(text) => setEmail(onlyEmail(text))}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
      </S.TextInputWrapper>

      <TextInput
        secureTextEntry
        value={password}
        returnKeyType="send"
        reference={passwordRef}
        placeholder={i18n.t('password')}
        onSubmitEditing={() => onLogin()}
        onChangeText={(text) => setPassword(customLetters(text))}
      />

      <S.ButtonWrapper>
        <PrimaryButton text={i18n.t('login')} onPress={() => onLogin()} />
      </S.ButtonWrapper>

      <S.ForgotPasswordButton onPress={() => {}}>
        <S.ForgotPasswordButtonText>
          {`${i18n.t('forgotYourPassword')}?`}
        </S.ForgotPasswordButtonText>
      </S.ForgotPasswordButton>

      <S.RowCenter>
        <S.Line />
        <S.Or>{i18n.t('or')}</S.Or>
        <S.Line />
      </S.RowCenter>

      <S.SocialButtonsWrapper>
        <PrimaryButton
          socialButton
          onPress={() => {}}
          textColor={colors.BLACK}
          text={i18n.t('googleLogin')}
          backgroundColor={colors.WHITE}
          icon={
            <S.GoogleLogoWrapper>
              <S.GoogleLogo />
            </S.GoogleLogoWrapper>
          }
        />

        {Platform.OS === 'ios' ? (
          <S.ButtonWrapper>
            <PrimaryButton
              socialButton
              onPress={() => {}}
              text={i18n.t('appleLogin')}
              backgroundColor={colors.BLACK}
              icon={<AntDesign name="apple1" size={20} color={colors.WHITE} />}
            />
          </S.ButtonWrapper>
        ) : null}
      </S.SocialButtonsWrapper>

      <S.HaveAnAccountText>
        {`${i18n.t('dontHaveAnAccount')}?`}{' '}
        <S.RegisterText onPress={() => navigation.navigate('Register')}>
          {i18n.t('signUp')}
        </S.RegisterText>
      </S.HaveAnAccountText>
    </S.Container>
  );
};

export default Login;
