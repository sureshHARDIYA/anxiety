import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { strings } from '@src/i18n';
import { Back } from '@src/components/themes';
import styles from './style';

const Source = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>Depression Sources</Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={[styles.whiteText, styles.list]}>
        Mental Health America
      </Text>
      <Text style={[styles.whiteText, styles.list]}>Mayo Clinic </Text>
      <Text style={[styles.whiteText, styles.list]}>WebMD</Text>
      <Text style={[styles.whiteText, styles.list]}>
        National Institute of Mental Health
      </Text>
      <Text style={[styles.whiteText, styles.list]}>
        National Alliance on Mental Illness
      </Text>
      <Text style={[styles.whiteText, styles.list]}>
        Anxiety and Depression Association of America
      </Text>
      <Text style={[styles.whiteText, styles.list]}>
        Psychology Today
      </Text>
      <Text style={[styles.whiteText, styles.list]}>
        World Health Organization
      </Text>
    </View>
  </ScrollView>
);

Source.navigationOptions = ({ navigation }) => ({
  title: strings('info_menu.title.sources'),
  headerLeft: <Back navigation={navigation} route="Info" />,
});

export default Source;
