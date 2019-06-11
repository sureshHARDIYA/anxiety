import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Text } from 'react-native';
import { Button } from '@ant-design/react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Picker } from '@src/components/forms/fields';
import { strings } from '@src/i18n';
import styles from './style';
import validate from './validate';

class SettingForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <KeyboardAwareScrollView
        behavior="padding"
        style={styles.container}
      >
        <Field
          name="language"
          component={Picker}
          defaultValue="en"
          options={[
            { value: 'en', label: strings('language.en') },
            { value: 'no', label: strings('language.no') },
          ]}
          label={strings('setting.language')}
        />
        <Button
          style={styles.submit}
          onPress={handleSubmit}
        >
          <Text style={styles.submitText}>{strings('buttons.submit')}</Text>
        </Button>
      </KeyboardAwareScrollView>
    );
  }
}

SettingForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'setting-form',
  validate
})(SettingForm);
