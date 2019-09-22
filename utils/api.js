import { AsyncStorage } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from "expo-permissions";

const DECKS_STORAGE_KEY = 'DinaAbuzied:decks';
const CARDS_STORAGE_KEY = 'DinaAbuzied:cards';
const NOTIFICATION_KEY = 'DinaAbuzied:notifications';

/**
 * @description called when the user take a new 
 *              quiz to clear todays notification
 */
export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

/**
 * @description creates an object holding the 
 *              configuration of the notification
 */
function createNotification() {
    return {
        title: 'Take your quiz!',
        body: "👋 Don't forget to take your quiz today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

/**
 * @description checks if the user allows the app to push notfications, 
 *              if it is allowed then it cancels all previous scheduled 
 *              nofications and creates a new one which is set the next 
 *              day on 6pm, if not it throws an error
 */
async function getNotificationAsync() {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status === 'granted') {
        Notifications.cancelAllScheduledNotificationsAsync()
        let tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(18)
        tomorrow.setMinutes(0)

        Notifications.scheduleLocalNotificationAsync(
            createNotification(),
            {
                time: tomorrow,
                repeat: 'day',
            }
        )

        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
    } else {
        throw new Error('Notification permission not granted');
    }
}

/**
 * @description checks if the app is allowed 
 *              to push notifications
 */
export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                getNotificationAsync();
            }
        })
}

/**
 * @description generates a random id to be used as a unique 
 *              identifier for cards and decks
 */
function generateRandomID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

/**
 * @description used the first time the app runs to set empty 
 *              objects to be saved in storage that new decks 
 *              and cards can be added to them later
 * @param {string} key the key of storage (cards or decks)
 */
function setTempData(key) {
    AsyncStorage.setItem(key, JSON.stringify({}));
    return {};
}

/**
 * @description uses AsyncStorage to load saved cards 
 *              and decks from storage
 */
export function fetchData() {
    return AsyncStorage.multiGet([DECKS_STORAGE_KEY, CARDS_STORAGE_KEY]).then((results) => {
        const obj = {};
        results.map((result) => {
            obj[result[0].slice(12)] = result[1] ? JSON.parse(result[1]) : setTempData(result[0])
        });
        return obj;
    })
}

/**
 * @description called the user wants to create a new deck, 
 *              it takes the title and generates a new id 
 *              and an empty cards array
 * @param {string} title title of the new deck
 */
export function AddDeckToStorage(title) {
    const id = generateRandomID();
    const deck = { title, id, cards: [] };
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [id]: deck
    })).then((() => deck));
}

/**
 * @description called when user wants to create a new card, 
 *              it genertaes a new card id and then saves 
 *              the new card in storage and the card id in the 
 *              holding deck
 * @param {string} deckID the id of the deck holding the new card
 * @param {string} question 
 * @param {string} answer 
 */
export function AddCardToStorage(deckID, question, answer) {
    const id = generateRandomID();
    const card = { id, deckID, question, answer };
    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
        [id]: card
    })).then(() => AsyncStorage.getItem(DECKS_STORAGE_KEY))
        .then(result => {
            const decks = JSON.parse(result);
            decks[deckID].cards.push(id);
            return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
        }).then(() => {
            return { deckID, card };
        });
}