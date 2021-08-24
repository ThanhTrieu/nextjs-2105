import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from './action';
import { apiVirus } from '../services/covid';
import { helper } from '../helpers/common';

function* virusSaga() {
    try {
        yield put(actions.startGetData(true));
        const data = yield call(apiVirus.getDataVirusCotona);
        if(!helper.isEmptyObject(data)){
            yield put(actions.getDataSuccess(data))
        } else {
            yield put(actions.getDataFail({
                cod: 404,
                mess: "not found"
            }));
        }
        yield put(actions.startGetData(false));
    } catch(e) {
        yield put(actions.getDataFail({
            cod: 500,
            mess: e
        }))
    }
}

export function* watchVirusSaga(){
    yield takeEvery(actions.REQUEST_DATA_VIRUS, virusSaga);
}