import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { strings } from '@src/i18n';
import styles from './style';

const Message = () => (
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

Message.navigationOptions = {
  title: strings('info_menu.title.privacy_policy'),
};

export default Message;
