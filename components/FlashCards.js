import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleFetchingData } from "../actions/index";
import { View, StatusBar} from 'react-native';
import MainNav from './MainNav';
import Constants from 'expo-constants';
import { blue } from '../utils/colors';
import { AppLoading } from 'expo';
import { setLocalNotification } from '../utils/api'

function CardsStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

class FlashCards extends Component {
  state = {
    ready: false
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleFetchingData())
    .then(() => this.setState(() => ({ready: true})));
    setLocalNotification();
  }
  render() {
    const { ready } = this.state;
    if (ready === false) {
      return <AppLoading />
    }
    return (
      <View style={{flex: 1}}>
        <CardsStatusBar backgroundColor={ blue } barStyle="light-content" />
        <MainNav />
      </View>
    );
  }
}

export default connect()(FlashCards);