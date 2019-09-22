import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './ResultStyle';

function Result(props) {
    const { totalAnswers, correctAnswers, resetQue, backToDeck } = props;
    const per = Math.floor(correctAnswers / totalAnswers * 100);
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Result</Text>
                <Text style={styles.title}>You have answered {correctAnswers} of {totalAnswers}</Text>
                <Text style={[styles.percentage, per >= 50 ? styles.textGreen : styles.textRed]}>{per}%</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.btn} onPress={() => resetQue()}>
                    <Text style={styles.btnTitle}>Retake Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => backToDeck()}>
                    <Text style={styles.btnTitle}>Back to Deck</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Result;