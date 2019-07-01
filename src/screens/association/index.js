import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import _ from 'lodash';
// import { Back } from '@src/components/themes';
import { connect } from 'react-redux';
import { Sizes, Colors } from '@src/constants';
import Icons from 'react-native-vector-icons/FontAwesome';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { Icon, Button, Modal, Toast } from '@ant-design/react-native';
import * as AssociationAction from '@src/actions/association';
import { strings } from '@src/i18n';
import status from './data';
import Style from './style';

class Association extends Component {
  static navigationOptions = ({
    header: null
  });

  constructor(props) {
    super(props);

    const subject = _.shuffle(['relationship', 'emotions'])[0];

    this.state = {
      subject,
      answers: {},
      items: _.shuffle(status[subject]),
    };
  }

  componentDidMount() {
    this.setState({ subject: _.shuffle(['relationship', 'emotions'])[0] }, () => this.order());
  }

  order = () => {
    const { items, subject } = this.state;
    this.setState({ items: [...items, ..._.shuffle(status[subject])] });
  }

  onBack = () => Modal.alert(strings('alert.confirm'), strings('alert.back'), [
    { text: strings('buttons.cancel'), onPress: () => {}, style: 'cancel' },
    { text: strings('buttons.ok'), onPress: () => this.props.navigation.navigate('Exercise') },
  ]);

  onSubmit = () => Modal.alert(strings('alert.confirm'), strings('alert.submit'), [
    { text: strings('buttons.cancel'), onPress: () => {}, style: 'cancel' },
    {
      text: strings('buttons.ok'),
      onPress: () => this.props.onSubmit({
        items: this.state.answers,
        subject: this.state.subject,
      }, (error) => {
        if (error) {
          Toast.fail(error.toString());
        } else {
          Toast.success(strings('alert.submitsuccess'));
          this.props.navigation.navigate('Exercise');
        }
      })
    },
  ]);

  onSwipedLeft = index => this.onAnswer(index, -1);

  onSwipedRight = index => this.onAnswer(index, 1);

  onSwipedBottom = index => this.onAnswer(index, 0);

  onAnswer = (index, answer) => {
    const { answers, items } = this.state;
    answers[items[index]] = answer;
    this.setState({ answers });
  }

  renderItem = (item, index) => {
    const width = Sizes.screenWidth - 60;
    const height = Sizes.screenHeight - 120;

    return (
      <Card
        key={index}
        style={[Style.slide, { width, height }]}
      >
        <View style={Style.cardHeader}>
          <Text style={Style.title}>{item}</Text>
        </View>
        <View style={Style.footer}>
          <Text style={Style.footerTop}>{strings('exercise.howareyoufeeling')}</Text>
          <View style={Style.footerBottom}>
            <Icon
              size={30}
              name="frown"
              style={Style.icon}
              onPress={() => this.swiper.swipeLeft()}
            />
            <Icon
              size={30}
              name="meh"
              color={Colors.primary}
              style={Style.icon}
              onPress={() => this.swiper.swipeBottom()}
            />
            <Icon
              size={30}
              name="smile"
              color="green"
              style={Style.icon}
              onPress={() => this.swiper.swipeRight()}
            />
          </View>
        </View>
      </Card>
    );
  }

  render() {
    return (
      <View style={Style.container}>
        <View style={Style.header}>
          <Button
            size="small"
            type="ghost"
            style={Style.btnBack}
            onPress={this.onBack}
          >
            <Icons name="chevron-left" color="#FFF" />
          </Button>
          <View style={{ flex: 1 }} />
          <Button
            size="small"
            type="ghost"
            style={Style.btnSubmit}
            onPress={this.onSubmit}
          >
            <Text style={Style.txtSubmit}>{strings('buttons.submit')}</Text>
          </Button>
        </View>
        <CardStack
          disableTopSwipe
          style={Style.content}
          onSwipedLeft={this.onSwipedLeft}
          onSwipedRight={this.onSwipedRight}
          onSwipedBottom={this.onSwipedBottom}
          renderNoMoreCards={() => (
            <Icon
              size={50}
              name="reload"
              style={Style.icon}
              color={Colors.white}
              onPress={this.order}
            />
          )}
          ref={swiper => (this.swiper = swiper)}
        >
          {this.state.items.map(this.renderItem)}
        </CardStack>
      </View>
    );
  }
}

Association.propTypes = {
  onSubmit: PropTypes.func,
  navigation: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (association, cb) => dispatch(AssociationAction.onCreateRequest({ association, cb })),
});

export default connect(null, mapDispatchToProps)(Association);
