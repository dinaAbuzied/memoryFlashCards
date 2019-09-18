import { fetchData, AddDeckToStorage } from '../utils/api.js';
import { recieveDecks, addDeck } from './decks.js';
import { getCards } from './cards.js';

export const handleFetchingData = () => {
    return (dispatch) => {
        return fetchData().then(({ decks, cards }) => {
            dispatch(recieveDecks(decks));
            dispatch(getCards(cards));
        });
    }
}

export const handleAddDeck = (title) => {
    return (dispatch) => {
        return AddDeckToStorage(title).then((deck) => {
            dispatch(addDeck(deck));
            return deck;
        });
    }
}