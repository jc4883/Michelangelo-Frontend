export const receiveConversations = (payload) => {
    return {
      type: "RECEIVE_CONVERSATIONS",
      payload,
    }
}

export const receiveConversation = (payload) => {
  return {
    type: "RECEIVE_CONVERSATION",
    payload,
  }
}

export const selectConversation = (payload) => {
  return {
    type: "SELECT_CONVERSATION",
    payload
  }
}