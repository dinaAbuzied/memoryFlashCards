import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './IndividualDeckStyle';

class IndividualDeck extends Component {
    render() {
        const deck = this.props.navigation.getParam('deck');
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text style={styles.cardsNum}>{deck.cards.length} Cards</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.deckButton, styles.addCard]}>
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

export default connect()(IndividualDeck);