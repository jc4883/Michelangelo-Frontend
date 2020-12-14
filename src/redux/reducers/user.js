const initialState = {userId: null};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'RECEIVE_USER_ID': {
            return {...state, userId: payload};
        }
        default:
            return state
        }
}

