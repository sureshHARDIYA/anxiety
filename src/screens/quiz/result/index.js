import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView } from 'react-native';
import { Button } from '@ant-design/react-native';
import { strings } from '@src/i18n';
import * as Progress from 'react-native-progress';
import Style from './style';

const QuizResult = ({ navigation }) => {
  const score = (navigation.state.params || {}).score || 0;
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
    <ScrollView contentContainerStyle={Style.container}>
      <View style={Style.header}>
        <Text style={Style.headerText}>{score} / {fullScore}</Text>
        <View style={Style.progressView}>
          <Progress.Bar
            width={200}
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
        onPress={() => navigation.goBack()}
      >
        <Text style={Style.btnFooterText}>{strings('buttons.find_help')}</Text>
      </Button>
    </ScrollView>
  );
};

QuizResult.navigationOptions = {
  header: null,
};

QuizResult.propTypes = {
  navigation: PropTypes.object,
};

export default QuizResult;
