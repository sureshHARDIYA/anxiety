import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { strings } from '@src/i18n';
import { Back } from '@src/components/themes';
import styles from './style';

const HowToUse = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>{strings('info_menu.contents.how_to_use.title')}</Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={[styles.whiteText, styles.listTitle]}>{strings('info_menu.contents.how_to_use.subtitle1')}</Text>
      <Text style={[styles.whiteText, styles.listInfo]}>
        {strings('info_menu.contents.how_to_use.question1')}
      </Text>
      <View style={styles.paragraph}>
        <Text style={[styles.whiteText, styles.listTitle]}>{strings('info_menu.contents.how_to_use.subtitle2')}</Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          {strings('info_menu.contents.how_to_use.answer1')}
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={[styles.whiteText, styles.listTitle]}>{strings('info_menu.contents.how_to_use.subtitle3')}</Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          {strings('info_menu.contents.how_to_use.question2')}
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={[styles.whiteText, styles.listTitle]}>{strings('info_menu.contents.how_to_use.subtitle4')}</Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          {strings('info_menu.contents.how_to_use.answer2')}
        </Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          {strings('info_menu.contents.how_to_use.answer3')}
        </Text>
        <Text style={[styles.whiteText, styles.listInfo]}>
          {strings('info_menu.contents.how_to_use.answer4')}
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
