const types = {
    fetch_every_requested: "fetch/fetch_every_requested",
    fetch_every_received: "fetch/fetch_every_received",
    fetch_every_error: "fetch/fetch_every_error"
};

const initialState = {
    data: [],
    error: false,
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.fetch_every_requested: return { ...state, loading: true };
        case types.fetch_every_error: return { ...state, error: true, loading: false };
        case types.fetch_every_received: return { ...state, data: [...action.payload], loading: false};
        default: return initialState;
    }
}