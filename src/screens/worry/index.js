import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { reset } from 'redux-form';
import { strings } from '@src/i18n';
import { connect } from 'react-redux';
import Form from '@src/components/forms/worry';
import { Toast } from '@ant-design/react-native';
import * as WorryAction from '@src/actions/worry';
import { Container, Back } from '@src/components/themes';

class Worry extends Component {
  static navigationOptions = {
    title: strings('mct.worry_postponement'),
    headerLeft: <Back route="Home" />
  };

  onSubmit = (worry) => {
    this.props.onSubmit(worry, (error, data) => {
      if (!error) {
        this.props.onReset();
        this.props.navigation.navigate('Home');
        Toast.success(strings(worry.id ? 'mct.worry_updated_success' : 'mct.worry_created_success', { title: data.title }));
      } else {
        Toast.fail(error.toString());
      }
    });
  }

  render() {
    const item = { ...((this.props.navigation.state.params || {}).item || {}) };
    item.scheduled = moment(item.scheduled || new Date()).toString();

    return (
      <Container transparent>
        <Form
          initialValues={item}
          onSubmit={this.onSubmit}
        />
      </Container>
    );
  }
}

Worry.propTypes = {
  navigation: PropTypes.object,
  onReset: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onReset: () => dispatch(reset('worry-form')),
  onSubmit: (worry, cb) => {
    if (worry.id) {
      dispatch(WorryAction.onUpdateRequest({ worry, id: worry.id, cb }));
    } else {
      dispatch(WorryAction.onCreateRequest({ worry, cb }));
    }
  }
});

export default connect(null, mapDispatchToProps)(Worry);
