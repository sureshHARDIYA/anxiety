import { AppRegistry } from 'react-native';
import crashlytics from 'react-native-fabric-crashlytics';

crashlytics.init();

import App from './src'; // eslint-disable-line
import { name as appName } from './app.json'; // eslint-disable-line


AppRegistry.registerComponent(appName, () => App);
