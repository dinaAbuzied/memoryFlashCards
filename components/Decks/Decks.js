import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './DecksStyle';

function Decks ({ decks }) {
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

const mapStateToProps = ({ decks }) => {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Decks);