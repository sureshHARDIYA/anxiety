import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { strings } from '@src/i18n';
import { Back } from '@src/components/themes';
import styles from './style';

const HowToUse = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>How to use this app?</Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={[styles.whiteText, styles.listTitle]}>Questions</Text>
      <Text style={[styles.whiteText, styles.listInfo]}>
        Answer the questions honestly and answer them all in one sitting.
      </Text>
      <View style={styles.paragraph}>
        <Text style={[styles.whiteText, styles.listTitle]}>Start </Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          Click “The Test” button to start taking the test. Once started, you
          have to answer all of the questions to complete the test.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={[styles.whiteText, styles.listTitle]}>Questions</Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          Answer the questions honestly and answer them all in one sitting.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={[styles.whiteText, styles.listTitle]}>
          {['Results', ' '].join()}
        </Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          Your latest test result and the summary analysis of the results will
          show on the “History” screen. GAD-7 Anxiety Severity: This is
          calculated by assigning scores of 0, 1, 2, and 3, to the response
          categories of “not at all,” “several days,” “more than half the days,”
          and “nearly every day,” respectively. GAD-7 total score for the seven
          items ranges from 0 to 21.
        </Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          Scores of 5, 10, and 15 represent cut points for mild, moderate, and
          severe anxiety, respectively. Though designed primarily as a screening
          and severity measure for generalized anxiety disorder, the GAD-7 also
          has moderately good operating characteristics for three other common
          anxiety disorders – panic disorder, social anxiety disorder, and
          post-traumatic stress disorder. When screening for individual or any
          anxiety disorder, a recommended cut point for further evaluation is a
          score of 10 or greater.
        </Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          Using the threshold score of 10, the GAD-7 has a sensitivity of 89%
          and a specificity of 82% for generalized anxiety disorder. It is
          moderately good at screening three other common anxiety disorders –
          panic disorder (sensitivity 74%, specificity 81%), social anxiety
          disorder (sensitivity 72%, specificity 80%), and post-traumatic stress
          disorder (sensitivity 66%, specificity 81%).
        </Text>
      </View>
    </View>
  </ScrollView>
);

HowToUse.navigationOptions = ({ navigation }) => ({
  title: strings('info_menu.title.how_to_use'),
  headerLeft: <Back navigation={navigation} route="Info" />
});

export default HowToUse;
