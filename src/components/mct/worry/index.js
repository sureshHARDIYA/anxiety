import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { createStructuredSelector } from 'reselect';
import * as WorryAction from '@src/actions/worry';
import * as WorrySelect from '@src/selectors/worry';
import { ScrollView, View, Text } from 'react-native';
import { Button, Icon, List } from '@ant-design/react-native';
import { Container } from '@src/components/themes';
import { Colors } from '@src/constants';
import { FORMAT_DATE } from '@src/constants/Variables';
import Style from './style';

class MCTWorry extends Component {
  constructor(props) {
    super(props);
    props.onSearch();
  }

  renderItem = item => (
    <List.Item
      key={item.id}
      style={[Style.item, item.status && Style.itemActive]}
      onPress={() => this.props.navigation.navigate('Worry', { item: { ...item } })}
    >
      <View style={Style.itemContent}>
        <Text style={Style.text}>
          {item.title}
        </Text>
        <Text style={[Style.date, item.status && Style.active]}>
          {moment(item.scheduled).format(FORMAT_DATE)}
        </Text>
      </View>
    </List.Item>
  );

  render() {
    const { navigation, list } = this.props;

    return (
      <Container>
        <ScrollView>
          <List>
            {list.map(this.renderItem)}
          </List>
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
