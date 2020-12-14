import React from "react";
import classNames from "classnames/bind";
import { connect } from "react-redux";

import MessageLoadingIcon from "components/common/MessageLoadingIcon";

import { Message } from "../types/types";

import user from "assets/user.svg";
import styles from "./ChatMessage.module.scss";

let cx = classNames.bind(styles);

interface ProvidedProps {
  message: Message;
}

interface ReduxProps {
  userId: string;
}

type ComponentProps = ProvidedProps & ReduxProps;

const ChatMessage = (props: ComponentProps) => {
  const {
    userId,
    message: { text, senderId, sent },
  } = props;

  const className = cx({
    content: true,
    sending_content: !sent,
  });

  return senderId === userId ? (
    <div className={styles.MyMessage}>
      {!sent && <MessageLoadingIcon />}
      <div className={className}>{text}</div>
    </div>
  ) : (
    <div className={styles.OtherMessage}>
      <div className={styles.sender}>{senderId}</div>
      <div className={styles.container}>
        <img src={user} className={styles.profile_pic} alt="" />
        <div className={styles.content}>{text}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  userId: state.user.userId,
});

export default connect(mapStateToProps)(ChatMessage);
