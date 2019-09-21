import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './IndividualDeckStyle';

class IndividualDeck extends Component {
    addCard = (deckID) => {
        const {navigation} = this.props;
        navigation.navigate('NewCard', { deckID });
    }
    render() {
        const { decks, navigation } = this.props;
        const deck = decks[navigation.getParam('id')];
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text style={styles.cardsNum}>{deck.cards.length} Cards</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => this.addCard(deck.id)} style={[styles.deckButton, styles.addCard]}>
                        <Text style={[styles.buttonTitle, styles.addCardTitle]}>Add Card</Text>
                    </TouchableOpacity>
                    {
                        deck.cards.length > 0
                            ? (<TouchableOpacity style={[styles.deckButton, styles.startQuiz]}>
                                    <Text style={[styles.buttonTitle, styles.startQuizTitle]}>Start Quiz</Text>
                                </TouchableOpacity>)
                            : null
                    }
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ decks }) => {
    return {
        decks
    }
}

export default connect(mapStateToProps)(IndividualDeck);