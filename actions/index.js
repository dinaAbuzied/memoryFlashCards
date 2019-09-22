import { fetchData, AddDeckToStorage, AddCardToStorage } from '../utils/api.js';
import { recieveDecks, addDeck, addCardToDeck } from './decks.js';
import { getCards, addCard } from './cards.js';

/**
 * @description called when the app starts to load 
 *              the cards and deck from storage and 
 *              then saving them in redux store
 */
export const handleFetchingData = () => {
    return (dispatch) => {
        return fetchData().then(({ decks, cards }) => {
            dispatch(recieveDecks(decks));
            dispatch(getCards(cards));
        });
    }
}

/**
 * @description called when a new deck is created 
 *              to save it to storage and redux store
 * @param {string} title the title of the new deck
 */
export const handleAddDeck = (title) => {
    return (dispatch) => {
        return AddDeckToStorage(title).then((deck) => {
            dispatch(addDeck(deck));
            return deck;
        });
    }
}

/**
 * @description called when a new card is created 
 *              to save it to storage and redux store
 * @param {string} deckID the ID of the deck holding the new card
 * @param {string} question 
 * @param {string} answer 
 */
export const handleAddCard = (deckID, question, answer) => {
    return (dispatch) => {
        return AddCardToStorage(deckID, question, answer).then(({deckID, card}) => {
            dispatch(addCard(card));
            dispatch(addCardToDeck(card.id, deckID));
        });
    }
}