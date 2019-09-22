import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import QA from './QA';
import Result from './Result';
import { white } from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 10
    }
});

class Quiz extends Component {
    state = {
        correctAns: 0,
        currentQue: 0
    }
    nextQue = () => {
        const { currentQue } = this.state;
        this.setState({
            currentQue: currentQue + 1
        })
    }
    answerCorrect = () => {
        const { correctAns } = this.state;
        this.setState({
            correctAns: correctAns + 1
        })
        this.nextQue()
    }
    resetQue = () => {
        this.setState({
            correctAns: 0,
            currentQue: 0
        })
    }
    backToDeck = () => {
        const { navigation } = this.props;
        const backAction = NavigationActions.back();
        navigation.dispatch(backAction);
    }
    render() {
        const { decks, navigation } = this.props;
        const cards = decks[navigation.getParam('deckID')].cards;
        const { correctAns, currentQue } = this.state;
        return (
            <View style={styles.container}>
                {
                    currentQue < cards.length
                    ? <QA 
                        id={cards[currentQue]} 
                        current={currentQue + 1} 
                        total={cards.length}
                        correctAns={this.answerCorrect}
                        incorrectAns={this.nextQue} />
                    : <Result
                        totalAnswers={cards.length}
                        correctAnswers={correctAns}
                        resetQue={this.resetQue}
                        backToDeck={this.backToDeck} />
                }
            </View>
        );
    }
}

const mapStateToProps = ({ decks }) => {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Quiz);