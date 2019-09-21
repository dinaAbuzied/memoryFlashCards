import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './NewCardStyle';
import { handleAddCard } from '../../actions/index';

class NewCard extends Component {
    state = {
        question: '',
        answer: ''
    }
    onChangeText = (text, type) => {
        if (type == 'que') this.setState({ question: text });
        else this.setState({ answer: text });
    }
    onSubmit() {
        const { dispatch, navigation } = this.props;
        const deckID = navigation.getParam('deckID');
        const { question, answer } = this.state;
        dispatch(handleAddCard(deckID, question, answer)).then(() => {
            const backAction = NavigationActions.back();
            navigation.dispatch(backAction);
        });
    }
    render() {
        const { question, answer } = this.state;
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.label}>Question</Text>
                <TextInput onChangeText={text => this.onChangeText(text, 'que')} style={styles.input} />
                <Text style={styles.label}>Answer</Text>
                <TextInput onChangeText={text => this.onChangeText(text, 'ans')} style={styles.input} />
                <TouchableOpacity
                    onPress={() => this.onSubmit()}
                    disabled={question === '' || answer === ''}
                    style={[styles.submit, question === '' || answer === '' ? styles.titleDisabled : null]}>
                    <Text style={styles.submitTitle}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

export default connect()(NewCard);