import { RECIEVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD_TO_DECK, REMOVE_CARD_FROM_DECK } from "../actions/decks";

const decks = (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_DECKS:
            return { ...action.decks };
        case ADD_DECK:
            return {
                ...state,
                [action.deck.id]: action.deck
            };
        case REMOVE_DECK:
            const obj = { ...state };
            delete obj[action.deck.id];
            return { ...obj };
        case ADD_CARD_TO_DECK:
            return {
                ...state,
                [action.deckID]: {
                    ...state[action.deckID],
                    cards: [...state[action.deckID].cards, cardID]
                }
            };
        case REMOVE_CARD_FROM_DECK:
            return {
                ...state,
                [action.deckID]: {
                    ...state[action.deckID],
                    cards: state[action.deckID].cards.filter((cardID) => {
                        return cardID !== action.cardID
                    })
                }
            };
        default:
            return state;
    }
}

export default decks;