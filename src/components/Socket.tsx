import React, { useEffect } from "react";
import {
  receiveMessage,
  receiveMessages,
  receiveSentEvent,
} from "redux/actions/messageActions";
import {
  receiveConversations,
  receiveConversation,
} from "redux/actions/conversationActions";
import { store } from "containers/App";

export let socket: WebSocket;

interface ProvidedProps {
  url: string;
  userId: string;
}

const Socket = (props: ProvidedProps) => {
  const { url, userId } = props;

  useEffect(() => {
    socket = createWebsocket(url, userId);
    const handleOpen = (event: any) => {
      const json = JSON.stringify({
        action: "get_conversations",
      });
      socket.send(json);
    };
    const handleMessage = (event: any) => {
      const data = JSON.parse(event.data);
      switch (data.action) {
        case "get_conversations":
          store.dispatch(receiveConversations(data.conversations));
          store.dispatch(receiveMessages(data.messages));
          break;
        case "send_msg":
          // message received by backend have been sent
          data.message["sent"] = true;
          console.log("data", data);
          store.dispatch(receiveMessage(data.message));
          store.dispatch(receiveConversation(data.conversation));
          break;
        case "Message Delivered":
          store.dispatch(receiveSentEvent(data.conversationId, data.timestamp));
          break;
        default:
          console.log(event.data);
      }
    };

    socket.addEventListener("open", handleOpen);
    socket.addEventListener("message", handleMessage);
    return () => {
      socket.removeEventListener("open", handleOpen);
      socket.removeEventListener("message", handleMessage);
    };
  }, [url, userId]);

  const createWebsocket = (url: string, id: string) => {
    const socket = new WebSocket(url + "?userId=" + id);
    return socket;
  };
  return <React.Fragment />;
};

export default Socket;
