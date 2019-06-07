import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { strings } from '@src/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const About = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>About the app</Text>
    </View>
    <View style={styles.paragraph}>
      <Text style={styles.whiteText}>
        The Generalized Anxiety Disorder scale (GAD-7) is one of the most frequently used diagnostic self-report scales for screening, diagnosis and severity assessment of anxiety disorder. Its psychometric properties from the view of the Item Response Theory paradigm have rarely been investigated.With a point prevalence of about 8% Generalized Anxiety Disorder (GAD) is the most frequent anxiety disorder in primary care. GAD is statistically associated with age and gender and shows high comorbidity with depression and somatization. Patients affected with GAD are impaired in their daily life and work life. The latter results in severe numbers of disability days and correspondingly increased economic costs. From the perspective of the primary care physician it is important to identify GAD in a reliable and yet economic way in order to initiate a proper treatment–e.g. psychotherapy—and in order to decrease the economic cost resulting from the usage of additional health services due to somatic symptoms. In the absence of brief and validated measures of anxiety, the GAD-7 was developed to provide a brief self-report measure to identify generalized anxiety in primary care. Relevantly, primary care physicians often struggle to recognize signs of psychological distress, particularly anxiety, despite being the first, if not the only point of contact with the healthcare system. Therefore, an easily applicable and face valid measure for GAD has the potential to improve recognition of GAD and address a pressing public health need.
      </Text>
    </View>
    <View style={styles.title}>
      <Text style={styles.titleText}>Advantages of the app</Text>
    </View>
    <View style={styles.paragraph}>
      <View style={styles.listItem}>
        <Icon size={10} name="circle" style={styles.icon} />
        <Text style={styles.whiteText}>
          Can be administered in person by a clinician, by telephone, or
          self-administered
        </Text>
      </View>
      <View style={styles.listItem}>
        <Icon size={10} name="circle" style={styles.icon} />
        <Text style={styles.whiteText}>
          Facilitates diagnosis of major depression
        </Text>
      </View>
      <View style={styles.listItem}>
        <Icon size={10} name="circle" style={styles.icon} />
        <Text style={styles.whiteText}>
          Provides assessment of symptom severity
        </Text>
      </View>
      <View style={styles.listItem}>
        <Icon size={10} name="circle" style={styles.icon} />
        <Text style={styles.whiteText}>
          Is well validated and documented in a variety of populations
        </Text>
      </View>
      <View style={styles.listItem}>
        <Icon size={10} name="circle" style={styles.icon} />
        <Text style={styles.whiteText}>
          Can be used in adolescents as young as 12 years of age
        </Text>
      </View>
    </View>
  </ScrollView>
);

About.navigationOptions = {
  title: strings('info_menu.title.about'),
};

export default About;
