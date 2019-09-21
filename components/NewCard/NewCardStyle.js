import { StyleSheet } from 'react-native';
import { white, blue, green } from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 30,
        justifyContent: 'flex-start'
    },
    input: {
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: blue,
        color: blue,
        marginTop: 10,
        marginBottom: 45,
        fontSize: 18
    },
    label: {
        color: blue,
        fontSize: 20,
        fontWeight: '900'
    },
    submit: {
        justifyContent: 'center',
        backgroundColor: green,
        height: 56,
        color: white,
        borderRadius: 10,
        marginTop: 25
    },
    submitTitle: {
        color: white,
        fontSize: 24,
        fontWeight: '900',
        textAlign: 'center'
    },
    titleDisabled: {
      opacity: 0.5
    }
});

export default styles;