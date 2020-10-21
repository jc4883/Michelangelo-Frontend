import React, { useEffect, useState } from "react";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  const initialState: any[] = [];
  const [notifications, setNotifications] = useState(initialState);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = () => {
    fetch("http://localhost:8000/api/auth/users/")
      .then((response) => response.json())
      .then((data) => setNotifications(data));

    // setNotifications([
    //   { id: 1, message: "hello there." },
    //   { id: 2, message: "this is a message." },
    //   { id: 3, message: "Here is another message." },
    // ]);
  };

  return (
    <div className={styles.MainPage}>
      {notifications.map((notification, key) => {
        return <div key={key}>{notification.username}</div>;
      })}
    </div>
  );
};

export default MainPage;
