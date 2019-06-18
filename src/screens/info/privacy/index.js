import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { strings } from '@src/i18n';
import { Back } from '@src/components/themes';
import styles from './style';

const PrivacyPolicy = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>{strings('info_menu.contents.privacy.title')}</Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        {strings('info_menu.contents.privacy.content')}
      </Text>
    </View>
  </ScrollView>
);

PrivacyPolicy.navigationOptions = ({ navigation }) => ({
  title: strings('info_menu.title.privacy_policy'),
  headerLeft: <Back navigation={navigation} route="Info" />,
});

export default PrivacyPolicy;
