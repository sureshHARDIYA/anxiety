import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Dimensions, ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { createStructuredSelector } from 'reselect';
import { strings } from '@src/i18n';
import * as QuizAction from '@src/actions/quiz';
import * as QuizSelect from '@src/selectors/quiz';
import { LineChart } from 'react-native-chart-kit';
import Style from './style';

class History extends Component {
  static navigationOptions = {
    title: strings('tabs.history'),
  };

  constructor(props) {
    super(props);
    props.onSearch();
  }

  renderItem = (item) => {
    console.log('item:', item);

    return (
      <View style={Style.item} key={item.id}>
        <Text style={Style.title}>{item.questionnaire}</Text>
        <Text style={Style.date}>{moment(item.authored).calendar()}</Text>
      </View>
    );
  }

  render() {
    const { list } = this.props;

    const chartConfig = {
      backgroundGradientFrom: '#0097e7',
      backgroundGradientTo: '#0097e7',
      color: () => '#FFFFFF',
      strokeWidth: 1, // optional, default 3
      backgroundColor: '#0097e7',
    };

    const data = {
      labels: ['1', '2', '3', '4'],
      datasets: [{
        data: [
          Math.random() * 21,
          Math.random() * 21,
          Math.random() * 21,
          Math.random() * 21,
          Math.random() * 21,
          Math.random() * 21,
          Math.random() * 21,
          Math.random() * 21,
          Math.random() * 21,
          Math.random() * 21
        ]
      }]
    };

    return (
      <View style={Style.container}>
        <LineChart
          bezier
          data={data}
          height={220}
          chartConfig={chartConfig}
          width={Dimensions.get('window').width}
        />
        <ScrollView>
          {list.map(this.renderItem)}
        </ScrollView>
      </View>
    );
  }
}

History.propTypes = {
  list: PropTypes.array,
  onSearch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  list: QuizSelect.getList(),
});

const mapDispatchToProps = dispatch => ({
  onSearch: () => dispatch(QuizAction.onSearchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(History));
