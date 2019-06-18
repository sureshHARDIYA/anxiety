import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { strings } from '@src/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Back } from '@src/components/themes';
import styles from './style';

const About = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>{strings('info_menu.contents.about.title1')}</Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        {strings('info_menu.contents.about.content')}
      </Text>
    </View>
    <View style={styles.title}>
      <Text style={styles.titleText}>{strings('info_menu.contents.about.title2')}</Text>
    </View>
    <View style={styles.paragraph}>
      <View style={styles.listItem}>
        <Icon size={10} name="circle" style={styles.icon} />
        <Text style={styles.whiteText}>
          {strings('info_menu.contents.about.advantage1')}
        </Text>
      </View>
      <View style={styles.listItem}>
        <Icon size={10} name="circle" style={styles.icon} />
        <Text style={styles.whiteText}>
          {strings('info_menu.contents.about.advantage2')}
        </Text>
      </View>
      <View style={styles.listItem}>
        <Icon size={10} name="circle" style={styles.icon} />
        <Text style={styles.whiteText}>
          {strings('info_menu.contents.about.advantage3')}
        </Text>
      </View>
      <View style={styles.listItem}>
        <Icon size={10} name="circle" style={styles.icon} />
        <Text style={styles.whiteText}>
          {strings('info_menu.contents.about.advantage4')}
        </Text>
      </View>
      <View style={styles.listItem}>
        <Icon size={10} name="circle" style={styles.icon} />
        <Text style={styles.whiteText}>
          {strings('info_menu.contents.about.advantage5')}
        </Text>
      </View>
    </View>
  </ScrollView>
);

About.navigationOptions = ({ navigation }) => ({
  title: strings('info_menu.title.about'),
  headerLeft: <Back navigation={navigation} route="Info" />,
});

export default About;
