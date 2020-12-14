import React from "react";

import { useParams } from "react-router-dom";

import Socket from "components/Socket";
import ChatList from "./chatList/ChatList";
import ChatView from "./chatView/ChatView";

import styles from "./MainPage.module.scss";

interface ParamTypes {
  userId: string;
}

const MainPage = () => {
  const { userId } = useParams<ParamTypes>();
  return (
    <section className={styles.MainPage}>
      <ChatList />
      <ChatView />
      <Socket
        url="wss://cwtro5dmgg.execute-api.us-east-1.amazonaws.com/dev"
        userId={userId}
      />
    </section>
  );
};

export default MainPage;
