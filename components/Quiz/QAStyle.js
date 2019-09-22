import { StyleSheet } from 'react-native';
import { white, darkBlue, red, green } from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 10,
        justifyContent: 'space-between'
    },
    numOfQue: {
        fontSize: 24,
        color: darkBlue
    },
    que: {
        fontSize: 28,
        fontWeight: '700',
        color: darkBlue,
        textAlign: 'center'
    },
    toggleQue: {
        marginTop: 40,
        alignSelf: 'center'
    },
    toggleQueText: {
        color: red,
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center'
    },
    AnsButton: {
        margin: 10,
        padding: 20,
        borderRadius: 10
    },
    buttonTitle: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        color: white
    },
    correct: {
        backgroundColor: green
    },
    incorrect: {
        backgroundColor: red
    }
});

export default styles;