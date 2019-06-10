import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { strings } from '@src/i18n';
import { Back } from '@src/components/themes';
import styles from './style';

const Message = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>Message from the Team</Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>Hello there,</Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        Thanks for downloading Anxiety CBT app.
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        Depression is a pervasive, global illness. According WHO’s 2012
        Depression Fact Sheet, an estimated 350 million people of all
        ages suffer from depression worldwide. Depression is different
        from occasional mood swings and emotional responses to everyday
        life challenges. It is a serious health condition and a
        long-lasting, severe episode’s effects on an individual can be
        devastating.
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        Although depression can be effectively treated, only a small
        minority of affected people actually receive such treatments.
        More often than not, the social stigma associated with mental
        disorders would keep an affected person from seeking
        professional help.
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        We developed this application to help those who may be suffering
        from depression to assess their conditions in privacy and
        hopefully feel empowered to take whatever action necessary.
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        Please feel free to reach out to us to let us know how you like
        the app and what we can do to make it help you better.
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>Take care,</Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>INTROMAT Team</Text>
    </View>
  </ScrollView>
);

Message.navigationOptions = ({ navigation }) => ({
  title: strings('info_menu.title.message'),
  headerLeft: <Back navigation={navigation} route="Info" />,
});

export default Message;
