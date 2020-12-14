import React from "react";
import classname from "classnames";
import { connect } from "react-redux";

import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";

import { Message } from "../types/types";
import { Conversation } from "../types/types";

import styles from "./ChatView.module.scss";

interface ComponentProps {
  selectedConversation: Conversation | null;
  messages: Message[];
}

const ChatView = (props: ComponentProps) => {
  const { selectedConversation, messages } = props;
  const name = selectedConversation
    ? selectedConversation.conversationName
    : "";
  return selectedConversation ? (
    <div className={styles.ChatView}>
      <nav className={styles.navigation}>
        <span className={styles.header}>
          {name}
          <span className={styles.user_ids}>
            {selectedConversation.userIds.join(", ")}
          </span>
        </span>
      </nav>
      <div className={classname("messages", styles.messages)}>
        {messages.map((message, idx) => {
          return <ChatMessage key={idx} message={message} />;
        })}
      </div>
      <ChatForm />
    </div>
  ) : (
    <div className={styles.ChatView}>
      <div className={styles.unselected_conversation_view}>
        No Conversation Selected
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const selectedConversationId = state.entities.selectedConversation;
  return {
    selectedConversation:
      selectedConversationId &&
      state.entities.conversations[selectedConversationId],
    messages:
      selectedConversationId && state.entities.messages[selectedConversationId],
  };
};

export default connect(mapStateToProps)(ChatView);
