import { RECIEVE_DECKS, ADD_DECK, ADD_CARD_TO_DECK } from "../actions/decks";

/**
 * @description handles saving the existing decks to the store 
 *              and adding new decks to the store and adding the 
 *              id of new cards to the containing deck
 */
const decks = (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_DECKS:
            return { ...action.decks };
        case ADD_DECK:
            return {
                ...state,
                [action.deck.id]: action.deck
            };
        case ADD_CARD_TO_DECK:
            return {
                ...state,
                [action.deckID]: {
                    ...state[action.deckID],
                    cards: [...state[action.deckID].cards, action.cardID]
                }
            };
        default:
            return state;
    }
}

export default decks;