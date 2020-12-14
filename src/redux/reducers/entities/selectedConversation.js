const initialState = null;

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SELECT_CONVERSATION': {
            return payload
        }
        default:
            return state
    }
}

