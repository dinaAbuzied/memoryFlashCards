import { GET_CARDS, ADD_CARD, REMOVE_CARD } from "../actions/cards";

const cards = (state = {}, action) => {
    switch (action.type) {
        case GET_CARDS:
            return { ...action.cards };
        case ADD_CARD:
            return {
                ...state,
                [action.card.id]: action.card
            };
        case REMOVE_CARD:
            const obj = { ...state };
            delete obj[action.card.id];
            return { ...obj };
        default:
            return state;
    }
}

export default cards;