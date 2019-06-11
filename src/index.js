import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ThemeProvider } from '@ant-design/react-native';
import { Drawer } from '@src/components/themes';
import * as SettingAction from '@src/actions/setting';
import ThemeContext from './themes';
import Navigation from './navigation';
import { store, persistor } from './reducers/createStore';

store.dispatch(SettingAction.onSearchRequest());

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeContext>
        <ThemeProvider>
          <Drawer>
            <Navigation />
          </Drawer>
        </ThemeProvider>
      </ThemeContext>
    </PersistGate>
  </Provider>
);
