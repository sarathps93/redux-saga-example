import { takeEvery, takeLatest } from 'redux-saga/effects';
import { types as fetchEveryTypes } from '../reducers/fetchEvery';
import { types as fetchLatestTypes } from '../reducers/fetchLatest';
import fetchEverySaga from './fetchEverySaga';
import fetchLatestSaga from './fetchLatestSaga';

function* rootSaga (dispatch, getState) {
    yield takeLatest(fetchLatestTypes.fetch_latest_requested, fetchLatestSaga, dispatch, getState);
    yield takeEvery(fetchEveryTypes.fetch_every_requested, fetchEverySaga, dispatch, getState);
};

export default rootSaga;
