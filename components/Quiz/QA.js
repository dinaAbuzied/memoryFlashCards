import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './QAStyle';

class QA extends Component {
    state = {
        isQue: true
    }
    toggleQue() {
        this.setState({
            isQue: !this.state.isQue
        });
    }
    render() {
        const { question, answer, current, total, correctAns, incorrectAns } = this.props;
        const { isQue } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.numOfQue}>{current}/{total}</Text>
                <View>
                    {
                        isQue
                        ? <Text style={styles.que}>{question}</Text>
                        : <Text style={styles.que}>{answer}</Text>
                    }
                    <TouchableOpacity onPress={() => this.toggleQue()} style={styles.toggleQue}>
                        <Text style={styles.toggleQueText}>
                        {
                            isQue
                            ? 'Answer'
                            : 'Question'
                        }
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => correctAns()} style={[styles.AnsButton, styles.correct]}>
                        <Text style={styles.buttonTitle}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => incorrectAns()} style={[styles.AnsButton, styles.incorrect]}>
                        <Text style={styles.buttonTitle}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ cards }, ownProp) => {
    const { question, answer } = cards[ownProp.id]
    return {
        question,
        answer
    }
}

export default connect(mapStateToProps)(QA);