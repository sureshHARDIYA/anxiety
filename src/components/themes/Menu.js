import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as AppAction from '@src/actions/app';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@ant-design/react-native';

const Menu = ({ onDrawer }) => (
  <Button
    type="ghost"
    style={{ borderWidth: 0 }}
    onPress={() => onDrawer()}
  >
    <Icon name="bars" color="#FFF" size={18} />
  </Button>
);

Menu.propTypes = {
  onDrawer: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onDrawer: () => dispatch(AppAction.onDrawerRequest({ open: true })),
});

export default connect(null, mapDispatchToProps)(Menu);
