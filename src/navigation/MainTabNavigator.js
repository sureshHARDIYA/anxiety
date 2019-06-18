import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Text, StyleSheet } from 'react-native';
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
    color: Colors.white
  },
  headerStyle: {
    color: Colors.white,
    backgroundColor: Colors.primary
  },
  headerTintColor: Colors.white,
  gesturesEnabled: false
};

const tabBarIcon = name => ({ focused }) => <Icon color={focused ? Colors.active : Colors.inactive} name={name} />; // eslint-disable-line
const tabBarLabel = label => ({ focused }) => <Text style={[Style.label, focused && Style.active]}>{strings(label)}</Text>; // eslint-disable-line

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false,
      headerStyle: {
        color: Colors.white,
        borderBottomWidth: 0,
        backgroundColor: Colors.primary
      }
    }
  }
);

HomeStack.navigationOptions = {
  tabBarIcon: tabBarIcon('home'),
  tabBarLabel: tabBarLabel('tabs.home')
};

const HistoryStack = createStackNavigator(
  {
    History: HistoryScreen,
    HistoryDetail: HistoryDetailScreen
  },
  {
    defaultNavigationOptions
  }
);

HistoryStack.navigationOptions = {
  tabBarIcon: tabBarIcon('clock-circle'),
  tabBarLabel: tabBarLabel('tabs.history')
};

const MCTtack = createStackNavigator(
  {
    MCT: MCTScreen,
    Worry: WorryScreen,
    Association: AssociationScreen
  },
  {
    defaultNavigationOptions
  }
);

MCTtack.navigationOptions = {
  tabBarIcon: tabBarIcon('star'),
  tabBarLabel: tabBarLabel('tabs.mct')
};

const InfoStack = createStackNavigator(
  {
    Info: InfoScreen
  },
  {
    defaultNavigationOptions
  }
);

InfoStack.navigationOptions = {
  tabBarIcon: tabBarIcon('container'),
  tabBarLabel: tabBarLabel('tabs.info')
};

const Style = StyleSheet.create({
  label: {
    fontSize: 12,
    color: Colors.inactive,
  },
  active: {
    color: Colors.active,
  }
});

export default createBottomTabNavigator({
  HomeStack,
  HistoryStack,
  MCTtack,
  InfoStack,
}, {
  initialRouteName: 'HomeStack',
  tabBarOptions: {
    activeTintColor: Colors.active,
    inactiveTintColor: Colors.inactive
  }
});
