import React from "react";
import classNames from "classnames/bind";
import { connect } from "react-redux";

import { selectConversation } from "redux/actions/conversationActions";
import { store } from "containers/App";
import { Message, Conversation } from "../types/types";

import styles from "./ChatEntry.module.scss";

let cx = classNames.bind(styles);

interface ProvidedProps {
  conversation: Conversation;
}

interface ReduxProps {
  selectedConversationId: string;
  lastMessage?: Message;
}

type ComponentProps = ProvidedProps & ReduxProps;

const ChatEntry = (props: ComponentProps) => {
  const {
    selectedConversationId,
    lastMessage,
    conversation: { conversationName, conversationId },
  } = props;

  const className = cx({
    chatEntry: true,
    selected: selectedConversationId === conversationId,
  });

  const handleClick = () => {
    store.dispatch(selectConversation(conversationId));
  };

  return (
    <div className={className} onClick={handleClick}>
      <span className={styles.chatName}>{conversationName}</span>
      {lastMessage && (
        <div className={styles.lastMessage}>
          {lastMessage.senderId}: {lastMessage.text}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: ProvidedProps) => {
  const conversationId = ownProps.conversation.conversationId;
  const conversationMessages = state.entities.messages[conversationId];
  const lastMessage = conversationMessages.length
    ? conversationMessages[conversationMessages.length - 1]
    : null;
  return {
    selectedConversationId: state.entities.selectedConversation,
    lastMessage,
  };
};

export default connect(mapStateToProps)(ChatEntry);
