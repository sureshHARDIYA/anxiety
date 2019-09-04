import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { createStructuredSelector } from 'reselect';
import { Text, Image, View, ScrollView } from 'react-native';
import moment from 'moment';
import { Button } from '@ant-design/react-native';
import { strings } from '@src/i18n';
import * as QuizSelect from '@src/selectors/quiz';
import * as SettingSelect from '@src/selectors/setting';

import { Menu } from '@src/components/themes';
import Style from './style';

const QuizStart = ({ navigation: { navigate }, list, setting }) => {
  let message;
  const selectedDay = setting.selectedDay || 'monday';
  let notDisabled = moment().format('d') === ['monday', 'tueday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].indexOf(selectedDay);

  if (notDisabled) {
    notDisabled = !list.find(item => moment(item.createdAt).isSame(moment(), 'day'));

    if (notDisabled) {
      message = strings('home.limit0', { weekday: strings(`setting.testOption.${selectedDay}`) });
    }
  } else {
    message = strings('home.limit1', { weekday: strings(`setting.testOption.${selectedDay}`) });
  }

  const disabled = !notDisabled;

  return (
    <ScrollView contentContainerStyle={Style.container}>
      <Image
        style={Style.icon}
        source={require('@src/assets/images/icons/tasklist.png')}
      />
      <View style={Style.caption}>
        <Text style={Style.title}>{strings('home.title')}</Text>
        <Text style={Style.captionText}>{strings('home.caption')}</Text>
      </View>
      <Button
        type="ghost"
        disabled={disabled}
        style={[Style.btn, disabled && Style.disabled]}
        onPress={() => navigate('QuizLanding')}
      >
        <Text style={[Style.btnText, disabled && Style.disabledText]}>
          {strings('home.btn')}
        </Text>
      </Button>
      {disabled && <Text style={Style.disabledText}>{message}</Text>}
    </ScrollView>
  );
};

QuizStart.navigationOptions = ({ navigation }) => ({
  title: null,
  headerLeft: <Menu navigation={navigation} />,
});

QuizStart.propTypes = {
  list: PropTypes.array.isRequired,
  setting: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  list: QuizSelect.getList(),
  setting: SettingSelect.getInfo(),
});

export default connect(mapStateToProps)(withNavigation(QuizStart));
