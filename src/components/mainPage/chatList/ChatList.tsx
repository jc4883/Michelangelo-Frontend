import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";

import { receiveConversation } from "redux/actions/conversationActions";
import { receiveMessage } from "redux/actions/messageActions";

import ChatEntry from "./ChatEntry";
import { Conversation } from "../types/types";
import plus_button from "assets/plus_button.png";
import close_button from "assets/close_button.svg";

import axios from "axios";

import styles from "./ChatList.module.scss";

interface ReduxProps {
  conversations: Conversation[];
  userId: string;
}

const ChatList = (props: ReduxProps) => {
  const { conversations, userId } = props;
  let [modal, setModal] = useState(false);
  let [friendName, setFriendName] = useState("");
  let [conversationName, setConversationName] = useState("");

  const dispatch = useDispatch();

  const openNewConversationModal = () => {
    setModal(true);
  };

  const closeNewConversationModal = () => {
    setModal(false);
  };

  const submitNewConversationForm = (e: any) => {
    e.preventDefault();
    axios
      .post(
        "https://5wooo2via3.execute-api.us-east-1.amazonaws.com/v1/conversation",
        {
          recipientId: friendName,
          conversationName: conversationName,
          senderId: userId,
        }
      )
      .then((res) => {
        console.log("conversation", res);
        dispatch(
          receiveMessage({
            conversationId: res.data.conversationId,
          })
        );
        dispatch(receiveConversation(res.data));
      });
    setModal(false);
  };

  const changeFriendNameField = (e: any) => {
    setFriendName(e.target.value);
  };

  const changeConversationNameField = (e: any) => {
    setConversationName(e.target.value);
  };

  return (
    <div className={styles.chatList}>
      <nav className={styles.navigation}>
        <h1 className={styles.header}>Chats</h1>
        <img
          className={styles.plusButton}
          onClick={openNewConversationModal}
          src={plus_button}
          alt=""
        />
      </nav>
      <div className={styles.chatEntries}>
        {Object.values(conversations).map((chatEntry, idx) => {
          return <ChatEntry key={idx} conversation={chatEntry} />;
        })}
      </div>
      {modal && (
        <div className={styles.newConversationModalContainer}>
          <div className={styles.newConversationModalBackdrop} />
          <div className={styles.newConversationModal}>
            <img
              className={styles.newConversationModalCloseButton}
              src={close_button}
              onClick={closeNewConversationModal}
              alt=""
            />
            <form onSubmit={submitNewConversationForm}>
              <span>Conversation name</span>
              <input type="text" onChange={changeConversationNameField} />
              <span>Friend ID</span>
              <input type="text" onChange={changeFriendNameField} />

              <button className={styles.enterButton}>Enter</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  conversations: state.entities.conversations,
  userId: state.user.userId,
});

export default connect(mapStateToProps)(ChatList);
