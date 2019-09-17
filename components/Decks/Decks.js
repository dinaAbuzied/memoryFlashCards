import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { white, red, green } from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 20
    },
    deck: {
        backgroundColor: green,
        height: 200,
        borderRadius: 10,
        padding: 20,
        justifyContent: 'space-around',
    },
    title: {
        color: white,
        fontSize: 22,
        fontWeight: '900',
        textAlign: 'center'
    },
    cardsNum: {
        color: white,
        textAlign: 'right',
        fontWeight: '900',
        fontSize: 16
    }
});

class Decks extends Component {
    render() {
        const { decks } = this.props;
        console.log(decks);
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.deck} >
                    <Text style={styles.title}>Deck 1</Text>
                    <Text style={styles.cardsNum}>3 Cards</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = ({ decks }) => {
    return {
       decks
    }
}

export default connect(mapStateToProps)(Decks);