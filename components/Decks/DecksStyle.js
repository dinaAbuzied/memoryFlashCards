import { StyleSheet} from 'react-native';
import { white, green, blue } from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 20
    },
    emptyContainer: {
        justifyContent: 'center'
    },
    deck: {
        backgroundColor: green,
        height: 200,
        borderRadius: 10,
        padding: 20,
        justifyContent: 'space-around',
        marginBottom: 20
    },
    title: {
        color: white,
        fontSize: 22,
        fontWeight: '900',
        textAlign: 'center'
    },
    cardsNum: {
        color: white,
        textAlign: 'right',
        fontWeight: '900',
        fontSize: 16
    },
    emptyDecks: {
        color: blue,
        fontSize: 22,
        fontWeight: '900',
        textAlign: 'center'
    }
});

export default styles;