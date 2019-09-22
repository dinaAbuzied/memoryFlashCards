import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, ScrollView, Animated } from 'react-native';
import styles from './DecksStyle';

class Decks extends Component {
    state = {
        decksArr: [],
        animatedArr: []
    }
    componentDidMount() {
        const decks = Object.values(this.props.decks);
        const animatedArr = decks.map(() => this.getInitAnimatedValue());
        this.setState({
            decksArr: decks,
            animatedArr: animatedArr
        });
    }
    getInitAnimatedValue() {
        return {
            opacity: new Animated.Value(1),
            transform: [
                { translateX: new Animated.Value(0) }
            ]
        }
    }
    animatedDecks = () => {
        const { animatedArr } = this.state;
        const delay = 30;
        const speed = 200;
        const animation = [];

        for (let index = 0; index < animatedArr.length; index++) {
            const opacity = Animated.timing(
                animatedArr[index].opacity,
                {
                    toValue: 0,
                    duration: speed
                }
            );

            const translateX = Animated.timing(
                animatedArr[index].transform[0].translateX,
                {
                    toValue: -600,
                    duration: speed
                }
            );

            animation.push(opacity, translateX);
        }
        return Animated.stagger(delay, animation);
    }
    openDeck = (deck) => {
        this.animatedDecks().start(() => {
            const { animatedArr } = this.state;
            const { navigation } = this.props;
            navigation.navigate('IndividualDeck', { title: deck.title, id: deck.id });
            animatedArr.map(item => {
                item.opacity.setValue(1);
                item.transform[0].translateX.setValue(0);
            });
        });
    }
    render() {
        const { decksArr, animatedArr } = this.state;
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
                    decksArr.map((deck, index) => (
                        <Animated.View style={animatedArr[index]} key={deck.id}>
                            <TouchableOpacity onPress={() => this.openDeck(deck)} style={styles.deck} >
                                <Text style={styles.title}>{deck.title}</Text>
                                <Text style={styles.cardsNum}>{deck.cards.length} Cards</Text>
                            </TouchableOpacity>
                        </Animated.View>
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