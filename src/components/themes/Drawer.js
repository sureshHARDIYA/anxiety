import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { NavigationActions } from 'react-navigation';
import * as AppAction from '@src/actions/app';
import * as AppSelect from '@src/selectors/app';
import { strings } from '@src/i18n';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Drawer, Icon } from '@ant-design/react-native';
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
          <View style={Style.center}>
            <Icon color={Colors.white} name="home" />
            <Text style={Style.itemText}> {strings('menu.home')}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={Style.item}
          onPress={() => onNavigation('QuizStart')}
        >
          <View style={Style.center}>
            <Icon color={Colors.white} name="container" />
            <Text style={Style.itemText}> {strings('menu.start')}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={Style.item}
          onPress={() => onNavigation('Exercise')}
        >
          <View style={Style.center}>
            <Icon color={Colors.white} name="star" />
            <Text style={Style.itemText}> {strings('menu.exercise')}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={Style.item}
          onPress={() => onNavigation('History')}
        >
          <View style={Style.center}>
            <Icon color={Colors.white} name="clock-circle" />
            <Text style={Style.itemText}> {strings('menu.history')}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={Style.item}
          onPress={() => onNavigation('Info')}
        >
          <View style={Style.center}>
            <Icon color={Colors.white} name="container" />
            <Text style={Style.itemText}> {strings('menu.info')}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={Style.item}
          onPress={() => onNavigation('Setting')}
        >
          <View style={Style.center}>
            <Icon color={Colors.white} name="setting" />
            <Text style={Style.itemText}> {strings('menu.settings')}</Text>
          </View>
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
    marginLeft: 10,
    fontWeight: 'bold',
    alignItems: 'center',
    color: Colors.white,
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
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
