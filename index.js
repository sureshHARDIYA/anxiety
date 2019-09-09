import { AppRegistry } from 'react-native';
import crashlytics from 'react-native-fabric-crashlytics';
import App from './src';
import { name as appName } from './app.json';

crashlytics.init();

AppRegistry.registerComponent(appName, () => App);
