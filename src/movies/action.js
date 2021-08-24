export const SEARCH_MOVIE = Symbol('SEARCH_MOVIE');

export const START_SEARCH_MOVIE = Symbol('START_SEARCH_MOVIE');
export const SEARCH_MOVIE_SUCCESS = Symbol('SEARCH_MOVIE_SUCCESS');
export const SEARCH_MOVIE_FAIL = Symbol('SEARCH_MOVIE_FAIL');

export const searchMovies = (keyword, page = 1) => ({
    type: SEARCH_MOVIE,
    keyword,
    page
});

export const  searchMovieSuccess = (movies) => ({
    type: SEARCH_MOVIE_SUCCESS,
    movies
});
export const  startSearchMovie = (loading) => ({
    type: START_SEARCH_MOVIE,
    loading
});
export const  searchMovieFail = (error) => ({
    type: SEARCH_MOVIE_FAIL,
    error
});