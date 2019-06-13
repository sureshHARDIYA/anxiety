import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView } from 'react-native';
import { Sizes, Colors } from '@src/constants';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import * as QuizAction from '@src/actions/quiz';
import { Button, Modal } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { strings } from '@src/i18n';
import question from '@src/data/gad-7.json';
import { randomIdGenerator } from '@src/utilities/randomId';
import Style from './style';

class Quiz extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    const { concept } = question.contained[0].compose.include[0];

    this.state = {
      concept,
      index: 0,
      items: {},
      length: question.item.length,
      values: concept.reduce((obj, item) => ({ ...obj, [item.code]: item }), {}),
      questions: question.item.reduce((obj, item) => ({ ...obj, [item.linkId]: item }), {}),
      options: concept.reduce((obj, item) => ({ ...obj, [item.code]: item.extension[0].valueDecimal }), {}),
    };
  }

  onBack = () => Modal.alert(strings('alert.confirm'), strings('alert.back'), [
    { text: strings('buttons.cancel'), onPress: () => {}, style: 'cancel' },
    { text: strings('buttons.ok'), onPress: () => this.props.navigation.goBack() },
  ]);

  onSubmit = () => {
    const { items, values, options, questions } = this.state;

    const item = Object.entries(items).map(([key, value]) => {
      const current = questions[key];

      return ({
        linkId: key,
        clicked: false,
        text: current.text,
        definition: current.code,
        answer: [{ valueCoding: values[value] }]
      });
    });

    const data = {
      item,
      authored: new Date(),
      identifier: question.code,
      author: question.subjectType,
      subject: question.subjectType,
      questionnaire: question.title,
      id: randomIdGenerator(question.id),
      fullScore: 21,
      synced: false,
      syncEnabled: true,
      status: 'completed',
      resourceType: 'QuestionnaireResponse'
    };

    this.props.onSubmit(data, (error, rs) => {
      if (rs) {
        const score = Object.values(items).reduce((total, answer) => (total + options[answer]), 0);
        this.props.navigation.navigate('QuizResult', { score, authored: data.authored });
      }
    });
  }

  renderItem = ({ item }) => {
    const { index, length, concept, items } = this.state;
    const isFirst = !index;
    const hasPre = !!index;
    const hasNext = index !== length - 1 && !!items[item.linkId];
    const isLast = index === length - 1 && Object.keys(items).length === length;

    return (
      <View
        key={item.linkId}
        style={Style.slide}
      >
        <View style={[Style.itemHeader, Style.shadow]}>
          <View style={Style.headerSide}>
            {
              isFirst ? <Button onPress={this.onBack} style={Style.btnBack}><Text style={Style.btnBackText}>{strings('buttons.back')}</Text></Button> : (
                <Icon.Button
                  size={20}
                  disabled={!hasPre}
                  name="chevron-left"
                  style={Style.btnHeader}
                  underlayColor="transparent"
                  backgroundColor="transparent"
                  onPress={() => this.carousel.snapToPrev()}
                  color={hasPre ? Colors.primary : Colors.border}
                />
              )
            }
          </View>
          <View style={Style.headerContent}>
            <View style={Style.headerTitleCover}>
              <Text style={Style.headerTitle}>{index + 1} / {length}</Text>
            </View>
          </View>
          <View style={Style.headerSide}>
            {
              isLast ? <Button onPress={this.onSubmit} style={Style.btnBack}><Text style={Style.btnBackText}>{strings('buttons.submit')}</Text></Button> : (
                <Icon.Button
                  size={20}
                  disabled={!hasNext}
                  name="chevron-right"
                  style={Style.btnHeader}
                  underlayColor="transparent"
                  backgroundColor="transparent"
                  onPress={() => this.carousel.snapToNext()}
                  color={hasNext ? Colors.primary : Colors.border}
                />
              )}
          </View>
        </View>
        <ScrollView contentContainerStyle={Style.itemContent}>
          <View style={Style.question}>
            <Text style={Style.questionText}>{item.text}</Text>
          </View>
          <View style={Style.options}>
            {concept.map(option => (
              <Button
                type="ghost"
                key={option.code}
                style={[Style.option, items[item.linkId] === option.code && Style.selected]}
                onPress={() => this.setState({ items: { ...items, [item.linkId]: option.code } })}
              >
                <Text style={[Style.optionText, items[item.linkId] === option.code && Style.selectedText]}>{option.display}</Text>
              </Button>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }

  render() {
    const { index, items, length } = this.state;
    const sliderWidth = Sizes.screenWidth - 50;
    const itemWidth = sliderWidth - 10;
    const itemsLength = Object.keys(items).length;
    const canSwipe = index < itemsLength;
    const isLast = index === length - 1 && length === itemsLength;

    return (
      <View
        style={Style.container}
      >
        <Carousel
          loop={false}
          data={question.item}
          initialNumToRender={0}
          itemWidth={itemWidth}
          scrollEnabled={canSwipe}
          sliderWidth={sliderWidth}
          firstItem={this.state.index}
          renderItem={this.renderItem}
          ref={ref => (this.carousel = ref)}
          onBeforeSnapToItem={side => this.setState({ index: side })}
          containerCustomStyle={{
            marginTop: 50,
          }}
        />
        <View style={Style.footerTop}>
          {isLast && (
            <Button
              type="primary"
              onPress={this.onSubmit}
              style={[Style.submit, Style.shadow, { width: itemWidth }]}
            >
              <Text style={Style.submitText}>{strings('buttons.submit')}</Text>
            </Button>
          )}
        </View>
        <View style={Style.footer}>
          <Text style={Style.footerText}>{strings('strings.swipe')}</Text>
        </View>
      </View>
    );
  }
}

Quiz.propTypes = {
  onSubmit: PropTypes.func,
  navigation: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (quiz, cb) => dispatch(QuizAction.onCreateRequest({ quiz, cb })),
});

export default connect(null, mapDispatchToProps)(Quiz);
