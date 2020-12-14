export const receiveMessage = (payload) => {
    return {
      type: "RECEIVE_MESSAGE",
      payload,
    }
  }

export const receiveMessages = (payload) => {
  return {
    type: "RECEIVE_MESSAGES",
    payload
  }
}

export const receiveSentEvent = (conversationId, timestamp) => {
  return {
    type: "RECEIVE_SENT_EVENT",
    payload: {
      conversationId,
      timestamp
    }
  }
}