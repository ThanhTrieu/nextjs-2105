import * as types from './action';
import { HYDRATE } from 'next-redux-wrapper';

const initState = {
    count : 0
}

export const counterReducer = (state = initState, action) => {
    switch(action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload }
          }
        case types.INCREMENT_COUNTER:
            return {
                ...state,
                count: action.val + 1
            }
        case types.DECREMENT_COUNTER:
            return {
                ...state,
                count: action.val - 1
            }
        default:
            return state;
    }
}