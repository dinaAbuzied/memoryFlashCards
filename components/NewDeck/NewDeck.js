import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './NewDeckStyle';
import { handleAddDeck } from '../../actions/index';



class NewDeck extends Component {
  state = {
    deckTitle: ''
  }
  onChangeText(text) {
    this.setState({
      deckTitle: text.trim()
    })
  }
  onSubmit() {
    const { dispatch, navigation } = this.props;
    const { deckTitle } = this.state;
    dispatch(handleAddDeck(deckTitle)).then((deck) => {
      navigation.navigate('IndividualDeck', { title: deck.title, id:deck.id })
    });
  }
  render() {
    const { deckTitle } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>What is the title of your new Deck?</Text>
        <TextInput onChangeText={text => this.onChangeText(text)} style={styles.input} />
        <TouchableOpacity onPress={() => this.onSubmit()} disabled={deckTitle === ''} style={[styles.submit, deckTitle === '' ? styles.titleDisabled: null]} >
          <Text style={styles.submitTitle}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(NewDeck);