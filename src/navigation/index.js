import { connect } from 'react-redux';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import MainTabNavigator from './MainTabNavigator';
import MainNavigator from './MainNavigator';

export const AppNavigator = createAppContainer(createSwitchNavigator({
  MainTab: MainTabNavigator,
  Main: MainNavigator,
}));

export const middleware = createReactNavigationReduxMiddleware(state => state.navigation);

export const App = createReduxContainer(AppNavigator);

const mapStateToProps = state => ({ state: state.navigation });

export default connect(mapStateToProps)(App);
