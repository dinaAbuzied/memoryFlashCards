import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { white, red, green, blue } from '../../utils/colors';
import { handleAddDeck } from '../../actions/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    color: blue,
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center'
  },
  input: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: blue,
    color: blue,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 45,
    marginBottom: 45,
    fontSize: 18
  },
  submit: {
    justifyContent: 'center',
    backgroundColor: green,
    height: 56,
    color: white,
    borderRadius: 10,
    marginLeft: 25,
    marginRight: 25
  },
  submitTitle: {
    color: white,
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center'
  },
  titleDisabled: {
    opacity: 0.5
  }
});

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
    const { dispatch } = this.props;
    dispatch(handleAddDeck(this.state.deckTitle));
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