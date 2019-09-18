import { AsyncStorage } from 'react-native';

export const FLASH_CARDS_STORAGE_KEY = 'DinaAbuzied:flashCards';
export const DECKS_STORAGE_KEY = 'DinaAbuzied:decks';
export const CARDS_STORAGE_KEY = 'DinaAbuzied:cards';

function generateRandomID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function setTempData (key) {
    AsyncStorage.setItem(key, JSON.stringify({}));
    return {};
  }

/*
{
    decks: {
        deckid: {
            title:'Deck Name',
            id: '',
            cards: [cardid, cardid]
        }
    },
    cards: {
        cardid: {
                id: '',
                deckID: '',
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
                }
    }
}
*/

export function fetchData () {
    return AsyncStorage.multiGet([DECKS_STORAGE_KEY, CARDS_STORAGE_KEY]).then((results) => {
        const obj = {};
        results.map((result) => {
            obj[result[0].slice(12)] = result[1] ? JSON.parse(result[1]) : setTempData(result[0])
        });
        console.log(obj);
        return obj;
    })
}

export function AddDeckToStorage (title) {
    const id = generateRandomID();
    const deck = {title: title, id: id, cards: []};
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [id]: deck
      })).then((() => deck));
}