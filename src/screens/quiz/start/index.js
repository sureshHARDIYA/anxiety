import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { createStructuredSelector } from 'reselect';
import { Text, Image, View, ScrollView, AsyncStorage } from 'react-native';
import moment from 'moment';
import { Button } from '@ant-design/react-native';
import { strings } from '@src/i18n';
import * as QuizSelect from '@src/selectors/quiz';
import { Menu } from '@src/components/themes';
import Style from './style';

const QuizStart = ({ navigation: { navigate }, list }) => {
  const [selectedDay, setSelectDate] = useState('monday');
  const [isLoaded, setLoaded] = useState(false);

  if (!isLoaded) {
    setLoaded(true);

    AsyncStorage
      .getItem('setting')
      .then((setting) => {
        const parse = JSON.parse(setting || '{}');
        setSelectDate(parse.selectedDay || 'monday');
      });
  }

  let message;
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
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  list: QuizSelect.getList(),
});

export default connect(mapStateToProps)(withNavigation(QuizStart));
