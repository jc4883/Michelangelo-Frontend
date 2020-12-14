const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'RECEIVE_MESSAGE': {
            console.log('receiving message', payload)
            const { conversationId } = payload;
            const nextState = {};
            if (conversationId in state) {
                nextState[conversationId] = [...state[conversationId], payload];
            } else {
                nextState[conversationId] = []
                console.log('in payload', 'text' in payload)
                if ('text' in payload) {
                    nextState[conversationId].push(payload)
                }
            }
            nextState[conversationId].sort((messageA, messageB) => {
                const dateA = new Date(messageA.timestamp);
                const dateB = new Date(messageB.timestamp);
                if (dateA < dateB) {
                    return -1
                }
                return 1
            });
            return {...state, ...nextState};
        }
        case 'RECEIVE_MESSAGES': {
            const nextState = {};
            payload.forEach(message => {
                message['sent'] = true;
                const { conversationId } = message;
                if (!(conversationId in nextState)) {
                    nextState[conversationId] = [];
                } 

                nextState[conversationId].push(message);
            });
            Object.values(nextState).forEach(messageGroup => messageGroup.sort((messageA, messageB) => {
                const dateA = new Date(messageA.timestamp);
                const dateB = new Date(messageB.timestamp);
                if (dateA < dateB) {
                    return -1
                }
                return 1
            }))
            return {...state, ...nextState};
        }
        case 'RECEIVE_CONVERSATIONS': {
            const nextState = {};
            payload.forEach(conversation => {
                const { conversationId } = conversation;
                if (!(conversationId in state)) {
                    nextState[conversation.conversationId] = [];
                } 
            });
            return {...state, ...nextState};
        }
        case 'RECEIVE_SENT_EVENT': {
            const { conversationId, timestamp } = payload;
            const messageGroup = state[conversationId];
            const nextMessageGroup = messageGroup.map(message => {
                if (message.timestamp === timestamp) return {...message, sent: true}
                return message
            })
            const nextState = {[conversationId]: nextMessageGroup};
            return {...state, ...nextState};
        }

        default:
            return state
        }
}

