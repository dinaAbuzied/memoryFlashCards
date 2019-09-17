export const RECIEVE_DECKS = 'RECIEVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';
export const REMOVE_CARD_FROM_DECK = 'REMOVE_CARD_FROM_DECK';

export function recieveDecks(decks) {
    return {
        type: RECIEVE_DECKS,
        decks,
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function removeDeck(deckID) {
    return {
        type: REMOVE_DECK,
        deckID,
    }
}

export function addCardToDeck(cardID, deckID) {
    return {
        type: ADD_CARD_TO_DECK,
        cardID,
        deckID
    }
}

export function removeCardFromDeck(cardID, deckID) {
    return {
        type: REMOVE_CARD_FROM_DECK,
        cardID,
        deckID
    }
}