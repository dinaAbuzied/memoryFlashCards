import { AsyncStorage } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from "expo-permissions";

const DECKS_STORAGE_KEY = 'DinaAbuzied:decks';
const CARDS_STORAGE_KEY = 'DinaAbuzied:cards';
const NOTIFICATION_KEY = 'DinaAbuzied:notifications';

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

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

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                getNotificationAsync();
            }
        })
}

function generateRandomID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function setTempData(key) {
    AsyncStorage.setItem(key, JSON.stringify({}));
    return {};
}

export function fetchData() {
    return AsyncStorage.multiGet([DECKS_STORAGE_KEY, CARDS_STORAGE_KEY]).then((results) => {
        const obj = {};
        results.map((result) => {
            obj[result[0].slice(12)] = result[1] ? JSON.parse(result[1]) : setTempData(result[0])
        });
        console.log(obj);
        return obj;
    })
}

export function AddDeckToStorage(title) {
    const id = generateRandomID();
    const deck = { title, id, cards: [] };
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [id]: deck
    })).then((() => deck));
}

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