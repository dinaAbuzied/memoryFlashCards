import { RECIEVE_DECKS, ADD_DECK, ADD_CARD_TO_DECK } from "../actions/decks";

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
                    cards: [...state[action.deckID].cards, cardID]
                }
            };
        default:
            return state;
    }
}

export default decks;