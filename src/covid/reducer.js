import * as types from './action';

const defaultState = {
    loading: true,
    virus: {},
    error: {}
}

export const virusReducer = (state = defaultState, action) => {
    switch(action.type) {
        case types.START_GET_DATA:
            return {
                ...state,
                ...{ loading : action.loading }
            }
        case types.GET_DATA_VIRUS_SUCCESS:
            return {
                ...state,
                ...{ virus: action.data, error: {}}
            }
        case types.GET_DATA_VIRUS_FAIL:
            return {
                ...state,
                ...{error: action.error}
            }
        default:
            return state;
    }
}