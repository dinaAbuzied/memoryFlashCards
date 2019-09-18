import { GET_CARDS, ADD_CARD } from "../actions/cards";

const cards = (state = {}, action) => {
    switch (action.type) {
        case GET_CARDS:
            return { ...action.cards };
        case ADD_CARD:
            return {
                ...state,
                [action.card.id]: action.card
            };
        default:
            return state;
    }
}

export default cards;