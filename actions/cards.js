export const GET_CARDS = 'GET_CARDS';
export const ADD_CARD = 'ADD_CARD';

/**
 * @description called when the app starts to load all the saved cards
 * @param { Array } cards list of cards saved in storage
 */
export function getCards(cards) {
    return {
        type: GET_CARDS,
        cards
    }
}

/**
 * @description called to add a new card to storage
 * @param {Object} card holds the card ID and the ID 
 *                      of the containing deck and a 
 *                      question and an answer
 */
export function addCard(card) {
    return {
        type: ADD_CARD,
        card
    }
}