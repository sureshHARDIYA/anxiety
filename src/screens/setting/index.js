import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reset } from 'redux-form';
import { Toast } from '@ant-design/react-native';
import { createStructuredSelector } from 'reselect';
import { Container, Menu } from '@src/components/themes';
import { strings } from '@src/i18n';
import { connect } from 'react-redux';
import Form from '@src/components/forms/setting';
import * as SettingAction from '@src/actions/setting';
import * as SettingSelect from '@src/selectors/setting';

class Setting extends Component {
  static navigationOptions = {
    title: strings('menu.settings'),
    headerLeft: <Menu />
  };

  onSubmit = (params) => {
    this.props.onSubmit(params, (error) => {
      if (!error) {
        Toast.success(strings('setting.saved_success'));
      } else {
        Toast.fail(error.toString());
      }
    });
  }

  render() {
    return (
      <Container transparent>
        <Form
          onSubmit={this.onSubmit}
          initialValues={this.props.setting}
        />
      </Container>
    );
  }
}

Setting.propTypes = {
  setting: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  setting: SettingSelect.getInfo(),
});

const mapDispatchToProps = dispatch => ({
  onReset: () => dispatch(reset('setting-form')),
  onSubmit: (setting, cb) => {
    if (setting.id) {
      dispatch(SettingAction.onUpdateRequest({ setting, id: setting.id, cb }));
    } else {
      dispatch(SettingAction.onCreateRequest({ setting, cb }));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
