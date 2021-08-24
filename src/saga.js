import { call, all } from 'redux-saga/effects';
import { watchVirusSaga } from './covid/saga';
import { watchSagaMovie } from './movies/saga';

export default function* rootSaga() {
    yield all([
        call(watchVirusSaga),
        call(watchSagaMovie)
    ])
}