export type Message = {
    conversationId: string;
    timestamp: string;
    text: string;
    senderId: string;
    url: string;
    sent?: boolean;
}

export type Conversation = {
    conversationId: string,
    conversationName: string,
    userIds: string[]
}