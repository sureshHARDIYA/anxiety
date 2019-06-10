import { createStackNavigator } from 'react-navigation';
import { Colors } from '@src/constants';
import SettingScreen from '@src/screens/setting';
import QuizScreen from '@src/screens/quiz';
import QuizResultScreen from '@src/screens/quiz/result';
import QuizLandingScreen from '@src/screens/quiz/landing';

import InfoAboutScreen from '@src/screens/info/about';
import InfoCreditScreen from '@src/screens/info/credit';
import InfoHowToUseScreen from '@src/screens/info/HowToUse';
import InfoSourceScreen from '@src/screens/info/source';
import InfoPrivacyScreen from '@src/screens/info/privacy';
import InfoMessageScreen from '@src/screens/info/message';

export default createStackNavigator({
  Setting: SettingScreen,

  Quiz: QuizScreen,
  QuizResult: QuizResultScreen,
  QuizLanding: QuizLandingScreen,

  InfoAbout: InfoAboutScreen,
  InfoCredit: InfoCreditScreen,
  InfoHowToUse: InfoHowToUseScreen,
  InfoSource: InfoSourceScreen,
  InfoPrivacy: InfoPrivacyScreen,
  InfoMessage: InfoMessageScreen,
}, {
  defaultNavigationOptions: {
    headerTitleStyle: {
      color: Colors.white,
    },
    headerStyle: {
      color: Colors.white,
      backgroundColor: Colors.primary,
    },
    headerTintColor: Colors.white,
    gesturesEnabled: false,
  }
});
