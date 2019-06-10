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
      <Text style={[styles.whiteText, styles.listTitle]}>
        Questions
      </Text>
      <Text style={[styles.whiteText, styles.listInfo]}>
        Answer the questions honestly and answer them all in one
        sitting.
      </Text>
      <View style={styles.paragraph}>
        <Text style={[styles.whiteText, styles.listTitle]}>Start </Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          Click “The Test” button to start taking the test. Once
          started, you have to answer all of the questions to complete
          the test.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={[styles.whiteText, styles.listTitle]}>
          Questions
        </Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          Answer the questions honestly and answer them all in one
          sitting.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={[styles.whiteText, styles.listTitle]}>
          {['Results', ' '].join()}
        </Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          Your latest test result and the summary analysis of the
          results will show on the “Results” screen.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={[styles.whiteText, styles.listTitle]}>
          {['History', ' '].join()}
        </Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          History screen shows your historical test results. The color
          coding on the graph is as follows:
        </Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          Green: 0-5
        </Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          Light orange: 5-10 (mild depression)
        </Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          Dark orange: 10-20 (modestly severe depression)
        </Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          Red: 20+ (severe depression)
        </Text>
      </View>
    </View>
  </ScrollView>
);

HowToUse.navigationOptions = ({ navigation }) => ({
  title: strings('info_menu.title.how_to_use'),
  headerLeft: <Back navigation={navigation} route="Info" />,
});

export default HowToUse;
