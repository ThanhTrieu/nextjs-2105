import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './action';
import { movieApi } from '../services/movies';
import { helper } from '../helpers/common';

function* movieSaga({ keyword, page }) {
    try {
        yield put(actions.startSearchMovie(true));
        const data = yield call(movieApi.searchMovieByKeyword,keyword,page);
        if(!helper.isEmptyObject(data)){
            yield put(actions.searchMovieSuccess(data));
        } else {
            yield put(actions.searchMovieFail({
                cod: 404,
                mess: `Not found movie by keyword: ${keyword}`
            }))
        }
    } catch (e) {
        yield put(actions.searchMovieFail({
            cod: 500,
            mess: e
        }))
    } finally {
        yield put(actions.startSearchMovie(false));
    }
}

export function* watchSagaMovie() {
    yield takeLatest(actions.SEARCH_MOVIE, movieSaga);
}