import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
// import { Back } from '@src/components/themes';
import { connect } from 'react-redux';
import { Sizes, Colors } from '@src/constants';
import Icons from 'react-native-vector-icons/FontAwesome';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { Icon, Button, Modal, Toast } from '@ant-design/react-native';
import * as AssociationAction from '@src/actions/association';
import { strings } from '@src/i18n';
import status from './data.json';
import Style from './style';

class Association extends Component {
  static navigationOptions = ({
    header: null
  });

  constructor(props) {
    super(props);

    const subject = status && Object.keys(status).random()[0];

    this.state = {
      subject,
      answers: {},
      moving: null,
      items: [...status[subject]].random(),
    };

    this.options = {
      left: 'Negative',
      right: 'Positive',
      bottom: 'Neutral',
    };
  }

  componentDidMount() {
    this.setState({ subject: status && Object.keys(status).random()[0] }, () => this.order());
  }

  order = () => {
    const { subject } = this.state;
    this.setState({ items: [...status[subject]].random() });
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

  onSwiping = (x, y) => {
    const { moving } = this.state;
    if (x < -30 && moving !== 'left') {
      this.setState({ moving: 'left' });
    } else if (x > 30 && moving !== 'right') {
      this.setState({ moving: 'right' });
    } else if (x > -30 && x < 30 && y > 30 && moving !== 'bottom') {
      this.setState({ moving: 'bottom' });
    } if (!x && !y) {
      this.setState({ moving: null });
    }
  };

  goBack = () => this.setState({ moving: null });

  onSwipedLeft = index => this.onAnswer(index, -1);

  onSwipedRight = index => this.onAnswer(index, 1);

  onSwipedBottom = index => this.onAnswer(index, 0);

  onAnswer = (index, answer) => {
    const { answers, items } = this.state;
    answers[items[index]] = answer;
    this.setState({ answers, moving: null });
  }

  renderItem = (item, index) => {
    const { moving } = this.state;
    const width = Sizes.screenWidth - 60;
    const height = Sizes.screenHeight - 120;
    const current = this.swiper ? this.swiper.state.sindex - 2 : -1;

    return (
      <Card
        key={index}
        style={[Style.slide, { width, height }]}
      >
        <View style={[Style.cardHeader, !!moving && Style[`${moving}Moving`]]}>
          <Text style={Style.title}>{item}</Text>
          {!!moving && index === current && <Text style={[Style.headerText, Style[`${moving}Text`]]}>{this.options[moving]}</Text> }
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
          onSwiping={this.onSwiping}
          onSwipeEnd={this.goBack}
          onSwipedLeft={this.onSwipedLeft}
          onSwipedRight={this.onSwipedRight}
          onSwipedBottom={this.onSwipedBottom}

          renderNoMoreCards={() => (
            <Button
              type="ghost"
              style={Style.btn}
              onPress={this.onSubmit}
            >
              <Text style={Style.txtSubmit}>  {strings('buttons.submit')}</Text>
            </Button>
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
