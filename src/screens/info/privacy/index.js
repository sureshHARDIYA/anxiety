import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { strings } from '@src/i18n';
import { Back } from '@src/components/themes';
import styles from './style';

const PrivacyPolicy = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>Privacy Policy</Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        We do not collect any personal data through this application.
        Your test results are locally stored on your phone and are NOT
        accessible to the developers of this application or any 3rd
        party.
      </Text>
    </View>
  </ScrollView>
);

PrivacyPolicy.navigationOptions = ({ navigation }) => ({
  title: strings('info_menu.title.privacy_policy'),
  headerLeft: <Back navigation={navigation} route="Info" />,
});

export default PrivacyPolicy;
