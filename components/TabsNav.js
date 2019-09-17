import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Decks from './Decks/Decks';
import NewDeck from './NewDeck/NewDeck';
import { blue, white } from '../utils/colors'
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-albums' size={30} color={tintColor} />
        },
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck',
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle' size={30} color={tintColor} />
        },
    }
},
    {
        // navigationOptions: {
        //     header: null
        // },
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? white : blue,
              style: {
                height: 56,
                backgroundColor: Platform.OS === 'ios' ? blue : white,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                  width: 0,
                  height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
              }
        }
    }
)

export default createAppContainer(Tabs);