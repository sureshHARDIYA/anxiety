import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { strings } from '@src/i18n';
import { Back } from '@src/components/themes';
import styles from './style';

const Credit = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.content}>
      <Image
        style={styles.image}
        source={require('@src/assets/images/icons/profile.png')}
      />
      <Text style={styles.name}>Suresh Kumar Mukhiya</Text>
    </View>
    <View style={styles.content}>
      <Image
        style={styles.image}
        source={require('@src/assets/images/icons/profile.png')}
      />
      <Text style={styles.name}>Fazle Rabbi</Text>
    </View>
    <View style={styles.content}>
      <Image
        style={styles.image}
        source={require('@src/assets/images/icons/profile.png')}
      />
      <Text style={styles.name}>Violet Ka I Pun</Text>
    </View>
    <View style={styles.content}>
      <Image
        style={styles.image}
        source={require('@src/assets/images/icons/profile.png')}
      />
      <Text style={styles.name}>Yngva Lamo</Text>
    </View>
  </ScrollView>
);

Credit.navigationOptions = ({ navigation }) => ({
  title: strings('info_menu.title.credits'),
  headerLeft: <Back navigation={navigation} route="Info" />
});

export default Credit;
