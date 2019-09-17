import { StyleSheet } from 'react-native';
import { white, green, blue } from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: white,
      alignItems: 'stretch',
      justifyContent: 'center',
      padding: 20
    },
    title: {
      color: blue,
      fontSize: 24,
      fontWeight: '900',
      textAlign: 'center'
    },
    input: {
      padding: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: blue,
      color: blue,
      marginLeft: 25,
      marginRight: 25,
      marginTop: 45,
      marginBottom: 45,
      fontSize: 18
    },
    submit: {
      justifyContent: 'center',
      backgroundColor: green,
      height: 56,
      color: white,
      borderRadius: 10,
      marginLeft: 25,
      marginRight: 25
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