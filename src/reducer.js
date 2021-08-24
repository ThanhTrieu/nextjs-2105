import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { counterReducer } from './counter/reducer';
import { virusReducer } from './covid/reducer';
import { searchMovieReducer } from './movies/reducer';
import storage from 'redux-persist/lib/storage';

const configPersistSearchMovie = {
    key: 'nextjs_search_movie',
    storage: storage,
    whitelist: ['movies']
}

const rootReducer = combineReducers({
    counter: counterReducer,
    virus: virusReducer,
    moviesReducer: persistReducer(configPersistSearchMovie, searchMovieReducer)
});
export default rootReducer;