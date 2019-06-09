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
import Swipeout from 'react-native-swipeout';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Style from './style';

class History extends Component {
  static navigationOptions = {
    title: strings('tabs.history'),
  };

  constructor(props) {
    super(props);
    props.onSearch();
  }

  renderItem = item => (
    <Swipeout
      key={item.id}
      autoClose
      buttonWidth={30}
      style={Style.swipeout}
      backgroundColor="transparent"
      right={[
        {
          backgroundColor: 'transparent',
          text: <FontAwesome name="eye" />,
          onPress: () => console.log('more'),
        },
        {
          backgroundColor: 'transparent',
          text: <FontAwesome name="trash" color="red" />,
          onPress: () => console.log('delete'),
        },
      ]}
    >
      <View style={Style.item} key={item.id}>
        <Text style={Style.title}>{moment(item.authored).format('MMM. DD, YYYY [at] h:mm A z')}</Text>
        <Text style={Style.score}>{item.score} / {item.fullScore}</Text>
      </View>
    </Swipeout>
  );

  render() {
    const { list } = this.props;

    const chartConfig = {
      backgroundGradientFrom: '#0097e7',
      backgroundGradientTo: '#0097e7',
      color: () => '#FFFFFF',
      strokeWidth: 1, // optional, default 3
      backgroundColor: '#0097e7',
    };

    const { labels, scores } = [...list].reverse().reduce((obj, item, index) => {
      const { labels: objLabels, scores: objScores } = obj;

      objScores.push(item.score || 0);

      if (!index || index === list.length - 1) {
        objLabels.push(moment(item.authored).calendar());
      } else {
        objLabels.push('');
      }

      return { labels: objLabels, scores: objScores };
    }, { labels: [], scores: [] });

    const data = {
      labels,
      datasets: [{
        data: scores,
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
