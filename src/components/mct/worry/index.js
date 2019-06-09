import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { createStructuredSelector } from 'reselect';
import * as WorryAction from '@src/actions/worry';
import * as WorrySelect from '@src/selectors/worry';
import { ScrollView, View, Text } from 'react-native';
import { Button, Icon, Modal } from '@ant-design/react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, TouchableItem } from '@src/components/themes';
import { Colors } from '@src/constants';
import { FORMAT_DATE } from '@src/constants/Variables';
import { strings } from '@src/i18n';
import Style from './style';

class MCTWorry extends Component {
  constructor(props) {
    super(props);
    props.onSearch();
  }

  renderItem = (item) => {
    const scheduled = moment(item.scheduled);
    const createdAt = moment(item.createdAt);

    return (
      <TouchableItem
        key={item.id}
        right={[
          <MaterialIcons.Button
            size={14}
            key="edit"
            name="edit"
            color={Colors.gray}
            iconStyle={Style.iconStyle}
            underlayColor="transparent"
            backgroundColor="transparent"
            style={{ padding: 0, margin: 0 }}
            onPress={() => this.props.navigation.navigate('Worry', { item: { ...item } })}
          />,
          <MaterialIcons.Button
            size={14}
            key="delete"
            name="delete"
            color={Colors.error}
            iconStyle={Style.iconStyle}
            underlayColor="transparent"
            backgroundColor="transparent"
            style={{ padding: 0, margin: 0 }}
            onPress={() => Modal.alert(strings('alert.confirm'), strings('alert.remove', { item: item.title }), [
              { text: strings('buttons.cancel'), onPress: () => {}, style: 'cancel' },
              { text: strings('buttons.ok'), onPress: () => {} },
            ])}
          />
        ]}
        style={[Style.item, item.status && Style.itemActive]}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={[Style.itemLeft, item.status && Style.leftActive]}>
            <Text style={[Style.date, item.status && Style.active]}>
              {createdAt.format('HH:mm')}
            </Text>
            <Text style={[Style.date, item.status && Style.active]}>
              {createdAt.format('DD MMM')}
            </Text>
          </View>
          <View style={Style.itemContent}>
            <Text style={Style.text}>
              {item.title}
            </Text>
            <View style={Style.itemFooter}>
              <Icon name="calendar" />
              <Text style={Style.itemFooterText}> {scheduled.format(FORMAT_DATE)}</Text>
            </View>
          </View>
        </View>
      </TouchableItem>
    );
  }

  render() {
    const { navigation, list } = this.props;

    return (
      <Container>
        <ScrollView>
          {list.map(this.renderItem)}
        </ScrollView>
        <Button
          style={Style.btnFloat}
          onPress={() => navigation.navigate('Worry', { item: {} })}
        >
          <Icon name="plus" color={Colors.white} />
        </Button>
      </Container>
    );
  }
}

MCTWorry.propTypes = {
  list: PropTypes.array,
  navigation: PropTypes.object,
  onSearch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  list: WorrySelect.getList(),
});

const mapDispatchToProps = dispatch => ({
  onSearch: () => dispatch(WorryAction.onSearchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(MCTWorry));
