import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Back } from '@src/components/themes';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Icon, List } from '@ant-design/react-native';
import * as AssociationAction from '@src/actions/association';
import { strings } from '@src/i18n';
import { Colors } from '@src/constants';
import Style from './style';

class Association extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
    headerLeft: <Back navigation={navigation} route="HistoryStack" params={{ tab: 1 }} />
  });

  componentDidMount() {
    const { navigation } = this.props;
    const association = navigation.getParam('association');
    navigation.setParams({ title: association ? association.subject : strings('history.associations') });
  }

  get renderNodata() {
    return <Text style={Style.alert}>{strings('alert.no_data')}</Text>;
  }

  renderItem = ([item, index]) => {
    const statuses = {
      '-1': {
        icon: 'frown',
      },
      0: {
        icon: 'meh',
        color: Colors.primary,
      },
      1: {
        icon: 'smile',
        color: 'green',
      },
    };

    const status = statuses[`${index}`];

    return (
      <List.Item
        key={item}
        extra={(
          <Icon
            size={30}
            style={Style.icon}
            name={status.icon}
            color={status.color}
          />
        )}
      >
        <Text style={Style.item}>{item}</Text>
      </List.Item>
    );
  }

  renderList(association) {
    return (
      <List>
        {Object.entries(association.items).map(this.renderItem)}
      </List>
    );
  }

  render() {
    const { navigation } = this.props;
    const association = navigation.getParam('association');

    return (
      <View style={Style.container}>
        {!association ? this.renderNodata : this.renderList(association)}
      </View>
    );
  }
}

Association.propTypes = {
  navigation: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (association, cb) => dispatch(AssociationAction.onCreateRequest({ association, cb })),
});

export default connect(null, mapDispatchToProps)(withNavigation(Association));
