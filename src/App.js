import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, LogBox } from 'react-native';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastProvider } from 'react-native-styled-toast';

import themes from './themes';

import store from './redux';

import Routes from './routes/routes';

LogBox.ignoreLogs([
  "Warning: Can't perform a React state update on an unmounted component.",
]);

const App = () => (
  <>
    <Provider store={store}>
      <ThemeProvider theme={themes.dark}>
        <ToastProvider position="BOTTOM">
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <Routes />
        </ToastProvider>
      </ThemeProvider>
    </Provider>
  </>
);

export default App;
