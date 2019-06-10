import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { NavigationActions } from 'react-navigation';

import * as AppAction from '@src/actions/app';
import * as AppSelect from '@src/selectors/app';
import { strings } from '@src/i18n';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Drawer } from '@ant-design/react-native';
import { Colors, Config } from '@src/constants';

const DrawerMenu = ({ children, style, open, onDrawer, onNavigation }) => {
  const Siderbar = () => (
    <View style={Style.container}>
      <View style={Style.header}>
        <Image source={Config.logo} style={Style.logo} />
      </View>
      <View style={Style.content}>
        <TouchableHighlight
          style={Style.item}
          onPress={() => onNavigation('Home')}
        >
          <Text style={Style.itemText}>{strings('menu.home')}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={Style.item}
          onPress={() => onNavigation('Info')}
        >
          <Text style={Style.itemText}>{strings('menu.info')}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={Style.item}
          onPress={() => onNavigation('Setting')}
        >
          <Text style={Style.itemText}>{strings('menu.settings')}</Text>
        </TouchableHighlight>
      </View>
    </View>
  );

  return (
    <Drawer
      open={open}
      position="left"
      sidebar={<Siderbar />}
      onOpenChange={status => onDrawer(status)}
      style={[Style.drawerMenu, StyleSheet.flatten(style)]}
    >
      {children}
    </Drawer>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
  logo: {
    width: 150,
    height: 150,
  },
  content: {
    flex: 1,
  },
  list: {
    backgroundColor: Colors.transparent,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
    backgroundColor: Colors.transparent,
  },
  itemText: {
    fontWeight: '600',
    color: Colors.white,
  }
});

DrawerMenu.propTypes = {
  open: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  // navigation: PropTypes.object,
  onDrawer: PropTypes.func.isRequired,
  onNavigation: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  open: AppSelect.getDrawer(),
});

const mapDispatchToProps = dispatch => ({
  onDrawer: open => dispatch(AppAction.onDrawerRequest({ open })),
  onNavigation: (route, params = {}) => {
    dispatch(AppAction.onDrawerRequest({ open: false }));
    dispatch(NavigationActions.navigate({ routeName: route, params }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);
