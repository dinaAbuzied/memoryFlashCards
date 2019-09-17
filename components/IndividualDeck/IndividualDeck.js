import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { white, red, green, blue } from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 20
    }
});

class IndividualDeck extends Component {
    render() {
        const deck = this.props.navigation.getParam('deck');
        return (
            <View style={styles.container}>
                <Text>{deck.title}</Text>
            </View>
        );
    }
}

export default connect()(IndividualDeck);