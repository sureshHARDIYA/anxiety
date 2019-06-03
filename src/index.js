import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ThemeProvider } from '@ant-design/react-native';

import ThemeContext from './themes';
import AppNavigator from './navigation/AppNavigator';
import { store, persistor } from './reducers/createStore';

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeContext>
        <ThemeProvider>
          <AppNavigator />
        </ThemeProvider>
      </ThemeContext>
    </PersistGate>
  </Provider>
);
