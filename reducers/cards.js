import { GET_CARDS, ADD_CARD } from "../actions/cards";

/**
 * @description handles saving the existing cards to the store 
 *              and adding new cards to the store 
 */
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