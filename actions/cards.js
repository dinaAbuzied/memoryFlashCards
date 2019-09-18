export const GET_CARDS = 'GET_CARDS';
export const ADD_CARD = 'ADD_CARD';

export function getCards(cards) {
    return {
        type: GET_CARDS,
        cards
    }
}

export function addCard(card) {
    return {
        type: ADD_CARD,
        card
    }
}