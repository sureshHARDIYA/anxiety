import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Text, StyleSheet } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Colors } from '@src/constants';
import { strings } from '@src/i18n';

import HomeScreen from '@src/screens/home';
import ExerciseScreen from '@src/screens/exercise';

import QuizStartScreen from '@src/screens/quiz/start';

import HistoryScreen from '@src/screens/history';
import HistoryDetailScreen from '@src/screens/history/detail';

const defaultNavigationOptions = {
  headerTitleStyle: {
    color: Colors.white
  },
  headerStyle: {
    color: Colors.white,
    borderBottomWidth: 0,
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
      headerTitleStyle: {
        color: Colors.white
      },
      headerStyle: {
        color: Colors.white,
        backgroundColor: Colors.primary
      }
    }
  }
);

HomeStack.navigationOptions = {
  tabBarIcon: tabBarIcon('home'),
  tabBarLabel: tabBarLabel('tabs.worries')
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

const Exercisetack = createStackNavigator(
  {
    Exercise: ExerciseScreen,
  },
  {
    defaultNavigationOptions
  }
);

Exercisetack.navigationOptions = {
  tabBarIcon: tabBarIcon('star'),
  tabBarLabel: tabBarLabel('tabs.exercise')
};

const StartStack = createStackNavigator(
  {
    QuizStart: QuizStartScreen
  },
  {
    defaultNavigationOptions
  }
);

StartStack.navigationOptions = {
  tabBarIcon: tabBarIcon('container'),
  tabBarLabel: tabBarLabel('tabs.start')
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
  StartStack,
  Exercisetack,
  HistoryStack,
}, {
  // initialRouteName: 'Exercisetack',
  tabBarOptions: {
    activeTintColor: Colors.active,
    inactiveTintColor: Colors.inactive,
    tabStyle: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});
