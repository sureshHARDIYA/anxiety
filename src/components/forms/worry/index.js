import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Text } from 'react-native';
import { Button } from '@ant-design/react-native';
import { Input as TextInput, DateTime as DateInput, Switch as SwitchInput } from '@src/components/forms/fields';
import { Container } from '@src/components/themes';
import { strings } from '@src/i18n';
import styles from './style';
import validate from './validate';

class WorryForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <Container style={styles.container}>
        <Field
          name="title"
          component={TextInput}
          label={strings('mct.worry_title')}
          placeholder={strings('mct.worry_title_placeholder')}
        />
        <Field
          multiple
          rows={5}
          name="content"
          component={TextInput}
          label={strings('mct.worry_describe')}
          placeholder={strings('mct.worry_describe_placeholder')}
        />
        <Field
          name="scheduled"
          component={DateInput}
          label={strings('mct.worry_schedule')}
        />
        <Field
          name="status"
          component={SwitchInput}
          label={strings('mct.worry_completed')}
        />
        <Button
          style={styles.submit}
          onPress={handleSubmit}
        >
          <Text style={styles.submitText}>{strings('mct.worry_schedule')}</Text>
        </Button>
      </Container>
    );
  }
}

WorryForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'worry-form',
  validate
})(WorryForm);
