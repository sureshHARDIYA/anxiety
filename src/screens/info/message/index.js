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
        Social anxiety is the fear of being judged and evaluated negatively by
        other people, leading to feelings of inadequacy, inferiority,
        self-consciousness, embarrassment, humiliation, and depression. If a
        person usually becomes (irrationally) anxious in social situations, but
        seems better when they are alone, then social anxiety may be the
        problem.
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        Social anxiety disorder (formerly termed social phobia) is a much more
        common problem than past estimates have led us to believe. Millions of
        people all over the world suffer from this devastating and traumatic
        condition every day, either from a specific social anxiety or from a
        more generalized social anxiety.
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        We developed this application to help those who may be suffering from
        social anxiety to assess their conditions in privacy and hopefully feel
        empowered to take whatever action necessary.
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        Please feel free to reach out to us to let us know how you like the app
        and what we can do to make it help you better.
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
  headerLeft: <Back navigation={navigation} route="Info" />
});

export default Message;
