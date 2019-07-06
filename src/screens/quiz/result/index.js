import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Text, View, ScrollView } from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { strings } from '@src/i18n';
import * as Progress from 'react-native-progress';
import { Menu } from '@src/components/themes';
import { Sizes } from '@src/constants';
import Style from './style';

const QuizResult = ({ navigation }) => {
  const score = (navigation.state.params || {}).score || 10;
  const authored = moment((navigation.state.params || {}).authored || new Date());

  const fullScore = 21;

  const benchMarks = [
    strings('benchmarks.healthy'),
    strings('benchmarks.mild-anxiety'),
    strings('benchmarks.moderate-anxiety'),
    strings('benchmarks.severe-anxiety'),
  ];

  const { bench, description } = benchMarks.reduce((obj, item) => {
    const answer = item.trim().split(':');
    const values = answer[0].split('-');

    if (score >= parseInt(values[0], 10) && score <= parseInt(values[1], 10)) {
      return {
        bench: answer[0],
        description: answer[1].trim()
      };
    }

    return obj;
  }, { bench: null, description: null });

  return (
    <ScrollView style={Style.container}>
      <View style={Style.headerTop}>
        <Icon name="clock-circle" size={30} color="#FFF" />
        <View style={Style.headerTopRight}>
          <Text style={Style.headerTime}>{authored.format('MMM DD, YYYY')}</Text>
          <Text style={Style.headerTime}>{authored.format('hh:mm a')}</Text>
        </View>
      </View>
      <View style={Style.header}>
        <Text style={Style.headerText}><Text style={Style.bold}>{score}</Text> / {fullScore}</Text>
        <View style={Style.progressView}>
          <Progress.Bar
            width={Sizes.width - 60}
            height={25}
            color="#FFF"
            borderRadius={30}
            // unfilledColor="red"
            progress={score / fullScore}
          />
        </View>
        <Text style={Style.scoreResult}>
          {strings('alert.score_display', { score: bench || '0-4', result: description })}
        </Text>
      </View>
      <View style={Style.content}>
        <Text style={Style.benchmark}>{strings('strings.benchmark')}</Text>
        {benchMarks.map(item => <Text key={item} style={Style.benchmarkItem}>{item}</Text>)}
      </View>
      <Button
        type="ghost"
        style={Style.btnFooter}
        onPress={() => navigation.navigate('QuizDoctors')}
      >
        <Text style={Style.btnFooterText}>{strings('buttons.find_help')}</Text>
      </Button>
    </ScrollView>
  );
};

QuizResult.navigationOptions = ({ navigation }) => ({
  title: strings('results.title'),
  headerLeft: <Menu navigation={navigation} />,
});

QuizResult.propTypes = {
  navigation: PropTypes.object,
};

export default QuizResult;
