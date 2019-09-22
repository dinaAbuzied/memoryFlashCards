export const RECIEVE_DECKS = 'RECIEVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';

/**
 * @description called when the app starts to load all the saved decks
 * @param { Array } decks list of decks saved in storage
 */
export function recieveDecks(decks) {
    return {
        type: RECIEVE_DECKS,
        decks,
    }
}

/**
 * @description called to add a new deck to storage
 * @param {Object} deck holds the deck ID and its name 
 *                      and array of cards ID
 */
export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

/**
 * @description called when a new card is added to storage 
 *              to add the card id to the deck
 * @param {string} cardID the ID of the new card
 * @param {string} deckID the ID of the deck holding the new card
 */
export function addCardToDeck(cardID, deckID) {
    return {
        type: ADD_CARD_TO_DECK,
        cardID,
        deckID
    }
}