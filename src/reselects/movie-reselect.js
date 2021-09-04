import { createSelector } from 'reselect';

const movieState = state => state.moviesReducer;

export const getDataMovies = createSelector(
    movieState,
    item => {
        if(item.hasOwnProperty('results')){
            return item.results;
        }
        return null;
    }
);
export const loadingGetData = createSelector(
    movieState,
    item => item.loading
);
export const getTotalPageMovies = createSelector(
    movieState,
    item => {
        if(item.hasOwnProperty('total_pages')){
            return item.total_pages;
        }
        return 0;
    }
);
export const getTotalResultsMovies = createSelector(
    movieState,
    item => {
        if(item.hasOwnProperty('total_results')){
            return item.total_results;
        }
        return 0;
    }
);