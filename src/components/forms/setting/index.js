import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from 'react-native-picker-select';
import { strings } from '@src/i18n';
import styles from './style';

class SettingForm extends Component {
  state = {
    language: 'en',
    initialValues: {},
  }

  static getDerivedStateFromProps(props, state) {
    if (props.initialValues.language !== state.language && state.initialValues.language !== props.initialValues.language) {
      return ({
        initialValues: props.initialValues,
        language: props.initialValues.language,
      });
    }

    return null;
  }

  get options() {
    return [
      { value: 'en', label: strings('language.en') },
      { value: 'no', label: strings('language.no') },
      { value: 'vi', label: strings('language.vi') },
    ];
  }

  render() {
    const { onSubmit, initialValues } = this.props;

    return (
      <KeyboardAwareScrollView
        behavior="padding"
        style={styles.container}
      >
        <View style={styles.content}>
          <View style={styles.group}>
            <Text style={styles.label}>{strings('setting.language')}</Text>
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
                style={{
                  inputIOS: {
                    textAlign: 'right',
                  },
                  inputAndroid: {
                    textAlign: 'right',
                  }
                }}
                onValueChange={value => this.setState({ language: value || 'en' })}
                onClose={() => onSubmit({ ...initialValues, language: this.state.language })}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

SettingForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
};

export default SettingForm;
