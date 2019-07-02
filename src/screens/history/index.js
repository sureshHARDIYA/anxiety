import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Dimensions, ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { createStructuredSelector } from 'reselect';
import { strings } from '@src/i18n';
import { Menu } from '@src/components/themes';
import { Modal, Tabs } from '@ant-design/react-native';
import * as QuizAction from '@src/actions/quiz';
import * as QuizSelect from '@src/selectors/quiz';
import { LineChart } from 'react-native-chart-kit';
import Swipeout from 'react-native-swipeout';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Associations from '@src/components/associations';
import Style from './style';

class History extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: strings('tabs.history'),
    headerLeft: <Menu navigation={navigation} />,
  });

  constructor(props) {
    super(props);
    props.onSearch();
  }

  get renderNodata() {
    return (
      <View>
        <Text style={Style.alert}>{strings('alert.no_data')}</Text>
      </View>
    );
  }

  renderItem = item => (
    <Swipeout
      key={item.id}
      buttonWidth={30}
      style={Style.swipeout}
      backgroundColor="transparent"
      right={[
        {
          backgroundColor: 'transparent',
          text: <FontAwesome name="eye" />,
          onPress: () => this.props.navigation.navigate('HistoryDetail', { item }),
        },
        {
          backgroundColor: 'transparent',
          text: <FontAwesome name="trash" color="red" />,
          onPress: () => Modal.alert(strings('alert.confirm'), strings('alert.remove', { item: 'history' }), [
            { text: strings('buttons.cancel'), onPress: () => {}, style: 'cancel' },
            { text: strings('buttons.ok'), onPress: () => this.props.onDelete(item.id) },
          ]),
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
    const { list, navigation } = this.props;

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

    if (!scores.length) {
      scores.push(0);
      labels.push('No data');
    }

    const data = {
      labels,
      datasets: [{
        data: scores,
      }]
    };

    const tabs = [
      { title: strings('history.test') },
      { title: strings('history.associations') },
    ];

    return (
      <View style={Style.container}>
        <Tabs
          tabs={tabs}
          initialPage={navigation.dangerouslyGetParent().getParam('tab')}
        >
          <ScrollView>
            <LineChart
              bezier
              data={data}
              height={220}
              chartConfig={chartConfig}
              width={Dimensions.get('window').width}
            />
            {list.length ? list.map(this.renderItem) : this.renderNodata}
          </ScrollView>
          <ScrollView>
            <Associations />
          </ScrollView>
        </Tabs>
      </View>
    );
  }
}

History.propTypes = {
  list: PropTypes.array,
  navigation: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  list: QuizSelect.getList(),
});

const mapDispatchToProps = dispatch => ({
  onSearch: () => dispatch(QuizAction.onSearchRequest()),
  onDelete: id => dispatch(QuizAction.onDeleteRequest({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(History));
