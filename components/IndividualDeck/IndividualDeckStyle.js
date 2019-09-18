import { StyleSheet } from 'react-native';
import { white, green, darkBlue } from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 10
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    buttonsContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        margin: 20
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        textAlign: 'center',
        color: darkBlue
    },
    cardsNum: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        color: darkBlue,
        opacity: 0.5,
        marginTop: 20
    },
    deckButton: {
        marginTop: 10,
        textAlign: 'center',
        borderWidth: 2,
        padding: 20,
        borderRadius: 10,
    },
    buttonTitle: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
    },
    addCard: {
        borderColor: darkBlue
    },
    addCardTitle: {
        color: darkBlue
    },
    startQuiz: {
        borderColor: green,
        backgroundColor: green
    },
    startQuizTitle: {
        color: white
    }
});

export default styles;