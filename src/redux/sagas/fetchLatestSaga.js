import { call, put } from 'redux-saga/effects';
import fetch from '../../fetch/index';
import { types } from '../reducers/fetchLatest';

function* fetchLatestSaga (dispatch, getState) {
    try {
        const res = yield call(fetch, 'http://localhost:9091');
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        })
        yield put({
            type: types.fetch_latest_received,
            payload: res
        })
    } catch (error) {
        yield put({
           type: types.fetch_latest_error
        })
    }
}

export default fetchLatestSaga;
