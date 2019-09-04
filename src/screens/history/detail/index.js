import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Colors } from '@src/constants';
import { ScrollView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Style from './style';

const HistoryDetail = ({ navigation }) => {
  const quiz = navigation.getParam('item');
  return (
    <View style={Style.container}>
      <Text style={Style.header}>{moment(quiz.authored).format('MMM. DD, YYYY [at] h:mm A z')}</Text>
      <ScrollView>
        {quiz && Object.values(quiz.item).map(item => (
          <View
            key={item.linkId}
            style={Style.item}
          >
            <Text style={Style.question}>
              {item.text}
            </Text>
            <View style={Style.row}>
              <Icon size={20} name="chevron-right" color={Colors.primary} />
              {item.answer[0].valueCoding && (
                <Text style={[Style.answer, Style.whiteText]}>
                  {item.answer[0].valueCoding.display}
                </Text>
              )}
              {!item.answer[0].valueCoding && (
                <Text style={[Style.answer, Style.whiteText]}>
                  {item.answer[0].value}
                </Text>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

HistoryDetail.propTypes = {
  navigation: PropTypes.object,
};

export default HistoryDetail;
