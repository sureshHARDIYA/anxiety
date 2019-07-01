import React from 'react';
import { strings } from '@src/i18n';
import { Menu } from '@src/components/themes';
import Worry from '@src/components/mct/worry';

const Start = () => <Worry />;

Start.navigationOptions = ({ navigation }) => ({
  title: strings('menu.worries'),
  headerLeft: <Menu navigation={navigation} />,
});

export default Start;
