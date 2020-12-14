import React, { useState } from "react";
import { receiveUserId } from "redux/actions/userActions";
import { withRouter } from "react-router";
import { store } from "containers/App";

import styles from "./UserIdForm.module.scss";

const SocketCreateForm = (props: any) => {
  const [userId, setUserId] = useState("");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    store.dispatch(receiveUserId(userId));
    props.history.push(`/main/${userId}`);
  };
  return (
    <form className={styles.UserIdForm} onSubmit={handleSubmit}>
      <span>User ID</span>
      <input type="text" onChange={(event) => setUserId(event.target.value)} />
      <button>Submit</button>
    </form>
  );
};

export default withRouter(SocketCreateForm);
