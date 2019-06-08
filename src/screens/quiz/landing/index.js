import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView } from 'react-native';
import { Button } from '@ant-design/react-native';
import { strings } from '@src/i18n';
import data from '@src/data/gad-7.json';
import Style from './style';

const QuizLanding = ({ navigation }) => {
  const item = data.contained[0];

  return (
    <ScrollView contentContainerStyle={Style.container}>
      <View style={Style.caption}>
        <Text style={Style.title}>{item.title}</Text>
        <Text style={Style.captionText}>{item.description}</Text>
      </View>
      <Button
        type="ghost"
        style={Style.btn}
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={Style.btnText}>
          {strings('quiz.start')}
        </Text>
      </Button>
      <Button
        type="ghost"
        style={Style.btnFlat}
        onPress={() => navigation.goBack()}
      >
        <Text style={Style.btnFlatText}>
          {strings('quiz.back')}
        </Text>
      </Button>
    </ScrollView>
  );
};

QuizLanding.navigationOptions = {
  header: null,
};

QuizLanding.propTypes = {
  navigation: PropTypes.object,
};

export default QuizLanding;
