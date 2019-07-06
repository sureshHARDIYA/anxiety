import React from 'react';
import { connect } from 'react-redux';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Transition } from 'react-native-reanimated';

import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import MainTabNavigator from './MainTabNavigator';
import MainNavigator from './MainNavigator';

export const AppNavigator = createAppContainer(createStackNavigator({
  MainTab: MainTabNavigator,
  Main: MainNavigator,
}, {
  initialRouteName: 'MainTab',
  transition: (
    <Transition.Together>
      <Transition.Out
        durationMs={200}
        type="slide-left"
        interpolation="linear"
      />
      <Transition.In
        type="slide-right"
        durationMs={200}
      />
    </Transition.Together>
  ),
  defaultNavigationOptions: {
    header: null
  }
}));

export const middleware = createReactNavigationReduxMiddleware(state => state.navigation);

export const App = createReduxContainer(AppNavigator);

const mapStateToProps = state => ({ state: state.navigation });

export default connect(mapStateToProps)(App);
