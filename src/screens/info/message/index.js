import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { strings } from '@src/i18n';
import { Back } from '@src/components/themes';
import styles from './style';

const Message = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>{strings('info_menu.contents.message.title')}</Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>{strings('info_menu.contents.message.paragraph1')}</Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        {strings('info_menu.contents.message.paragraph2')}
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        {strings('info_menu.contents.message.paragraph3')}
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        {strings('info_menu.contents.message.paragraph4')}
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        {strings('info_menu.contents.message.paragraph5')}
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        {strings('info_menu.contents.message.paragraph6')}
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>{strings('info_menu.contents.message.paragraph7')}</Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>{strings('info_menu.contents.message.paragraph8')}</Text>
    </View>
  </ScrollView>
);

Message.navigationOptions = ({ navigation }) => ({
  title: strings('info_menu.title.message'),
  headerLeft: <Back navigation={navigation} route="Info" />
});

export default Message;
