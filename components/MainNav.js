import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Tabs from "./TabsNav";

const MainNavigator = createStackNavigator({
    Home: {
      screen: Tabs,
      navigationOptions: () => ({
        header: null,
      }),
    },
    // EntryDetail: {
    //   screen: EntryDetail,
    //   navigationOptions: {
    //     headerTintColor: white,
    //     headerStyle: {
    //       backgroundColor: purple,
    //     }
    //   }
    // }
  })

export default createAppContainer(MainNavigator);