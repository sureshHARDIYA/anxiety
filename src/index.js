import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ThemeProvider } from '@ant-design/react-native';
import { NavigationActions } from 'react-navigation';
import { Drawer } from '@src/components/themes';
// import DBNoti from '@src/db/notification';
import * as WorryAction from '@src/actions/worry';
import * as SettingAction from '@src/actions/setting';
import Notification from '@src/services/notification';
import ThemeContext from './themes';
import Navigation from './navigation';
import { store, persistor } from './reducers/createStore';

class Root extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   senderId: process.env.senderID
    // };

    store.dispatch(SettingAction.onSearchRequest());
    this.notif = new Notification(this.onRegister, this.onNotif);
  }

  onRegister = (token) => {
    console.log('token:', token);
    // this.setState({ registerToken: token.token, gcmRegistered: true });
  }

  onNotif = ({ data }) => {
    if ((data || {}).resourceType === 'Worry') {
      store.dispatch(WorryAction.onDetailRequest({
        id: data.resourceId,
        notificationId: data.id,
        cb: (_, item) => store.dispatch(NavigationActions.navigate({
          routeName: 'Worry',
          params: { item },
        })),
      }));
    }
  }

  render() {
    return (
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
  }
}

export default Root;
