import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Button } from '@ant-design/react-native';
import { strings } from '@src/i18n';
import Style from './style';

const ExerciseLanding = ({ navigation }) => (
  <View style={Style.container}>
    <Button
      type="ghost"
      style={Style.btn}
      onPress={() => navigation.navigate('Association')}
    >
      <Text style={Style.btnText}>
        {strings('exercise.start')}
      </Text>
    </Button>
  </View>
);

ExerciseLanding.navigationOptions = {
  header: null,
};

ExerciseLanding.propTypes = {
  navigation: PropTypes.object,
};

export default ExerciseLanding;
