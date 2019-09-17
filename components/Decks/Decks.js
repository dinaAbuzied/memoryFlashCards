import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { white, green, blue } from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 20
    },
    emptyContainer: {
        justifyContent: 'center'
    },
    deck: {
        backgroundColor: green,
        height: 200,
        borderRadius: 10,
        padding: 20,
        justifyContent: 'space-around',
        marginBottom: 20
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
    },
    emptyDecks: {
        color: blue,
        fontSize: 22,
        fontWeight: '900',
        textAlign: 'center'
    }
});

class Decks extends Component {
    render() {
        const { decks } = this.props;
        const decksArr = Object.values(decks);
        if (decksArr.length <= 0) {
            return (
                <View style={[styles.container, styles.emptyContainer]}>
                    <Text style={styles.emptyDecks}>No Decks</Text>
                    <Text style={styles.emptyDecks}>Press New Deck to add Decks</Text>
                </View>
            )
        }
        return (
            <ScrollView style={styles.container}>
                {
                    decksArr.map((deck) => (
                        <TouchableOpacity onPress={() => console.log('pressed')} key={deck.id} style={styles.deck} >
                            <Text style={styles.title}>{deck.title}</Text>
                            <Text style={styles.cardsNum}>{deck.cards.length} Cards</Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ decks }) => {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Decks);