import * as types from './action';

const initDefaultState = {
    loading: false,
    movies: {},
    errors: {}
}

export const searchMovieReducer = (state = initDefaultState, action) => {
    switch (action.type) {
        case types.START_SEARCH_MOVIE:
            return {
                ...state,
                ...{ loading: action.loading }
            }
        case types.SEARCH_MOVIE_SUCCESS:
            return {
                ...state,
                ...{ movies: action.movies, errors: {} }
            }
        case types.SEARCH_MOVIE_FAIL:
            return {
                ...state,
                ...{ errors: action.error }
            }  
        default:
            return state;
    }
}