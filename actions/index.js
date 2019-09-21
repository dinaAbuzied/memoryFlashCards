import { fetchData, AddDeckToStorage, AddCardToStorage } from '../utils/api.js';
import { recieveDecks, addDeck, addCardToDeck } from './decks.js';
import { getCards, addCard } from './cards.js';

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

export const handleAddCard = (deckID, question, answer) => {
    return (dispatch) => {
        return AddCardToStorage(deckID, question, answer).then(({deckID, card}) => {
            dispatch(addCard(card));
            dispatch(addCardToDeck(card.id, deckID));
        });
    }
}