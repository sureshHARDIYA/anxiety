import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, AsyncStorage } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from 'react-native-picker-select';
import { strings } from '@src/i18n';
import styles from './style';

class SettingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduled: '0',
      language: 'en',
      selectedDay: 'monday',
    };

    AsyncStorage
      .getItem('setting')
      .then(setting => setting && this.setState(JSON.parse(setting || '{}')));
  }

  get options() {
    return [
      { value: 'en', label: strings('language.en') },
      { value: 'no', label: strings('language.no') },
      { value: 'vi', label: strings('language.vi') },
    ];
  }

  get schedules() {
    return [
      { value: '0', label: strings('setting.schedules.0') },
      { value: '10', label: strings('setting.schedules.10') },
      { value: '20', label: strings('setting.schedules.20') },
      { value: '30', label: strings('setting.schedules.30') },
      { value: '60', label: strings('setting.schedules.60') },
    ];
  }

  get testOptions() {
    return [
      { value: 'monday', label: strings('setting.testOption.monday') },
      { value: 'tueday', label: strings('setting.testOption.tueday') },
      { value: 'wednesday', label: strings('setting.testOption.wednesday') },
      { value: 'thursday', label: strings('setting.testOption.thursday') },
      { value: 'friday', label: strings('setting.testOption.friday') },
      { value: 'saturday', label: strings('setting.testOption.saturday') },
      { value: 'sunday', label: strings('setting.testOption.sunday') },
    ];
  }

  onSubmit = () => {
    AsyncStorage.setItem('setting', JSON.stringify(this.state), () => {
      if (this.props.setting.scheduled !== this.state.scheduled) {
        this.props.onReschedule();
      }

      this.props.onReload();
    });
  }

  render() {
    const style = {
      inputIOS: {
        textAlign: 'right',
      },
      inputAndroid: {
        paddingTop: 0,
        paddingbottom: 0,
        minWidth: 150,
        height: 30,
        textAlign: 'right',
      },
    };

    return (
      <KeyboardAwareScrollView
        behavior="padding"
        style={styles.container}
      >
        <View style={styles.content}>
          <View style={styles.group}>
            <Text style={styles.label}>{strings('setting.languageHeader')}</Text>
          </View>
          <View style={styles.options}>
            <View style={styles.left}>
              <Text>{strings('setting.language')}</Text>
            </View>
            <View style={styles.right}>
              <RNPickerSelect
                placeholder={{}}
                items={this.options}
                value={this.state.language}
                style={style}
                onClose={this.onSubmit}
                onValueChange={value => this.setState({ language: value || 'en' })}
              />
            </View>
          </View>
          <View style={styles.group}>
            <Text style={styles.label}>{strings('setting.scheduleHeader')}</Text>
          </View>
          <View style={styles.options}>
            <View style={styles.left}>
              <Text>{strings('setting.schedule')}</Text>
            </View>
            <View style={styles.right}>
              <RNPickerSelect
                placeholder={{}}
                items={this.schedules}
                value={this.state.scheduled}
                style={style}
                onClose={this.onSubmit}
                onValueChange={value => this.setState({ scheduled: value || '0' })}
              />
            </View>
          </View>
          <View style={styles.group}>
            <Text style={styles.label}>{strings('setting.dayHeader')}</Text>
          </View>
          <View style={styles.options}>
            <View style={styles.left}>
              <Text>{strings('setting.selectDay')}</Text>
            </View>
            <View style={styles.right}>
              <RNPickerSelect
                placeholder={{}}
                items={this.testOptions}
                value={this.state.selectedDay}
                style={style}
                onClose={this.onSubmit}
                onValueChange={value => this.setState({ selectedDay: value || 'monday' })}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

SettingForm.propTypes = {
  onReload: PropTypes.func,
  onReschedule: PropTypes.func,
  setting: PropTypes.object.isRequired,
};

export default SettingForm;
