import { StyleSheet } from 'react-native';
import { white, darkBlue, red, green, blue } from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 10,
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        color: darkBlue
    },
    percentage: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 30
    },
    textRed: {
        color: red
    },
    textGreen: {
        color: green
    },
    btn: {
        margin: 10,
        padding: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: blue
    },
    btnTitle: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        color: blue
    },
});

export default styles;