import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Menu } from '@src/components/themes';
import { strings } from '@src/i18n';
import { connect } from 'react-redux';
import Form from '@src/components/forms/setting';
import * as SettingAction from '@src/actions/setting';
import * as SettingSelect from '@src/selectors/setting';

const Setting = ({ onReload, setting, ...others }) => <Form setting={setting} onReload={onReload} {...others} />;

Setting.navigationOptions = ({ navigation }) => ({
  title: strings('menu.settings'),
  headerLeft: <Menu navigation={navigation} />
});

Setting.propTypes = {
  onReload: PropTypes.func.isRequired,
  setting: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  setting: SettingSelect.getInfo(),
});

const mapDispatchToProps = dispatch => ({
  onReload: cb => dispatch(SettingAction.onSearchRequest({ cb })),
  onReschedule: () => dispatch(SettingAction.onRescheduleRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
