import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { createStructuredSelector } from 'reselect';
import * as Actions from '@src/actions/association';
import * as Selectors from '@src/selectors/association';
import { ScrollView, View, Text } from 'react-native';
import { Icon, Modal } from '@ant-design/react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, TouchableItem } from '@src/components/themes';
import { Colors } from '@src/constants';
import { strings } from '@src/i18n';
import Style from './style';

class Association extends Component {
  constructor(props) {
    super(props);
    props.onSearch();
  }

  renderItem = (item) => {
    const items = JSON.parse(item.items);
    const createdAt = moment(item.createdAt);

    return (
      <TouchableItem
        key={item.id}
        right={[
          <MaterialIcons.Button
            size={14}
            key="visibility"
            name="visibility"
            color={Colors.gray}
            iconStyle={Style.iconStyle}
            underlayColor="transparent"
            backgroundColor="transparent"
            style={{ padding: 0, margin: 0 }}
            onPress={() => this.props.navigation.navigate('AssociationDetail', { association: { ...item, items } })}
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
            onPress={() => Modal.alert(strings('alert.confirm'), strings('alert.remove', { item: item.subject }), [
              { text: strings('buttons.cancel'), onPress: () => {}, style: 'cancel' },
              { text: strings('buttons.ok'), onPress: () => this.props.onDelete(item.id) },
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
            <Text style={Style.text} numberOfLines={1}>
              {item.subject}
            </Text>
            <View style={Style.itemFooter}>
              <Icon name="audit" />
              <Text style={Style.itemFooterText}> {Object.keys(items).length}</Text>
            </View>
          </View>
        </View>
      </TouchableItem>
    );
  }

  render() {
    return (
      <Container>
        <ScrollView>
          {this.props.list.length ? this.props.list.map(this.renderItem) : <Text style={Style.alert}>{strings('alert.no_data')}</Text>}
        </ScrollView>
      </Container>
    );
  }
}

Association.propTypes = {
  list: PropTypes.array,
  navigation: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  list: Selectors.getList(),
});

const mapDispatchToProps = dispatch => ({
  onSearch: () => dispatch(Actions.onSearchRequest()),
  onDelete: id => dispatch(Actions.onDeleteRequest({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Association));
