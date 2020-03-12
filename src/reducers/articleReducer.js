import { actionType } from "../actions/actionType";

const initState = {
    articles: []
}

export const articleReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.fetch_article:
            return { ...state, articles: action.payload }
        default:
            return state
    }
}