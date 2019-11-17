export const types = {
    fetch_latest_requested: "fetch/fetch_latest_requested",
    fetch_latest_received: "fetch/fetch_latest_received",
    fetch_latest_error: "fetch/fetch_latest_error"
};

const initialState = {
    data: [],
    error: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.fetch_latest_requested: return {...state, loading: true };
        case types.fetch_latest_error: return { ...state, error: true, loading: false };
        case types.fetch_latest_received: 
            return { ...state, data: state.data.concat(action.payload), loading: false };
        default: return initialState;
    }
}

export const requestFetchLatest = () => ({ type: types.fetch_latest_requested });
