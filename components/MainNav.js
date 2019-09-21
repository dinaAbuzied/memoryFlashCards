import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Tabs from './TabsNav';
import IndividualDeck from './IndividualDeck/IndividualDeck';
import NewCard from './NewCard/NewCard';
import { white, red, green, blue } from '../utils/colors';

const MainNavigator = createStackNavigator({
    Home: {
      screen: Tabs,
      navigationOptions: () => ({
        header: null,
      }),
    },
    IndividualDeck: {
      screen: IndividualDeck,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
        headerTintColor: white,
        headerStyle: {
          backgroundColor: blue,
        }
      })
    },
    NewCard: {
      screen: NewCard,
      navigationOptions: {
        headerTitle: 'Add Card',
        headerTintColor: white,
        headerStyle: {
          backgroundColor: blue,
        }
      }
    }
  })

export default createAppContainer(MainNavigator);