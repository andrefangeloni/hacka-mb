import React from 'react';

import { connect } from 'react-redux';

import Storage, { keys } from '../../data/storage';

import { AuthActions, UserActions } from '../../redux/actions';

import { Container, LogoWrapper, Logo } from './styles';

const Splash = ({ navigation, getMe, logout }) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, [navigation]);

  const checkStorage = React.useCallback(async () => {
    const token = await Storage.find(keys.TOKEN);

    if (token) {
      try {
        await getMe();
      } catch (err) {
        await logout();
      }
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Landing' }],
      });
    }
  }, [navigation, getMe, logout]);

  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getMe: () => dispatch(UserActions.getMe()),
  logout: () => dispatch(AuthActions.logout()),
});

export default connect(null, mapDispatchToProps)(Splash);
