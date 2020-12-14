const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'RECEIVE_CONVERSATIONS': {
        const nextState = {};
        payload.forEach(conversation => {
            nextState[conversation.conversationId] = conversation;
        });
        return {...state, ...nextState};
    }
    case 'RECEIVE_CONVERSATION': {
        return {...state, [payload.conversationId]: payload }
    }
    default:
        return state
    }
}

