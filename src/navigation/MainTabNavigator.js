import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from '@ant-design/react-native';
import { Colors } from '@src/constants';
import { strings } from '@src/i18n';
import MCTScreen from '@src/screens/mct';
import WorryScreen from '@src/screens/worry';
import AssociationScreen from '@src/screens/association';

import HomeScreen from '@src/screens/home';

import HistoryScreen from '@src/screens/history';
import HistoryDetailScreen from '@src/screens/history/detail';

import InfoScreen from '@src/screens/info';

const defaultNavigationOptions = {
  headerTitleStyle: {
    color: Colors.white,
  },
  headerStyle: {
    color: Colors.white,
    backgroundColor: Colors.primary,
  },
  headerTintColor: Colors.white,
  gesturesEnabled: false,
};

const tabBarIcon = name => ({ focused }) => <Icon color={focused ? Colors.active : Colors.inactive} name={name} />; // eslint-disable-line

const HomeStack = createStackNavigator({
  Home: HomeScreen,
}, {
  // initialRouteName: 'QuizResult'
  defaultNavigationOptions: {
    gesturesEnabled: false,
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: strings('tabs.home'),
  tabBarIcon: tabBarIcon('home'),
};

const HistoryStack = createStackNavigator({
  History: HistoryScreen,
  HistoryDetail: HistoryDetailScreen,
}, {
  defaultNavigationOptions
});

HistoryStack.navigationOptions = {
  tabBarLabel: strings('tabs.history'),
  tabBarIcon: tabBarIcon('clock-circle'),
};

const MCTtack = createStackNavigator({
  MCT: MCTScreen,
  Worry: WorryScreen,
  Association: AssociationScreen,
}, {
  defaultNavigationOptions
});

MCTtack.navigationOptions = {
  tabBarLabel: strings('tabs.mct'),
  tabBarIcon: tabBarIcon('star'),
};

const InfoStack = createStackNavigator({
  Info: InfoScreen,
}, {
  defaultNavigationOptions
});

InfoStack.navigationOptions = {
  tabBarLabel: strings('tabs.info'),
  tabBarIcon: tabBarIcon('container'),
};

export default createBottomTabNavigator({
  HomeStack,
  HistoryStack,
  MCTtack,
  InfoStack,
}, {
  initialRouteName: 'HomeStack',
  tabBarOptions: {
    activeTintColor: Colors.active,
    inactiveTintColor: Colors.inactive,
  },
});
