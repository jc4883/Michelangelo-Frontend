import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";

import { receiveMessage } from "redux/actions/messageActions";

import { store } from "containers/App";
import { socket } from "components/Socket";
import Button from "components/common/Button/Button";

import paper_plane from "assets/paper-plane.svg";

import styles from "./ChatForm.module.scss";

interface FormValues {
  message: string;
}

interface ReduxProps {
  senderId: string;
  selectedConversationId: string;
}

const ChatForm = (props: ReduxProps) => {
  const initialValues: FormValues = { message: "" };
  const { selectedConversationId, senderId } = props;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        const timestamp = new Date().toISOString();
        console.log("senderId", senderId);
        store.dispatch(
          receiveMessage({
            text: values.message,
            conversationId: selectedConversationId,
            senderId,
            timestamp,
            url: "",
          })
        );
        const messages = document.querySelector(".messages");
        messages && messages.scrollTo(0, messages.scrollHeight);
        const json = JSON.stringify({
          conversationId: selectedConversationId,
          msg: values.message,
          timestamp,
          action: "send_msg",
        });
        socket.send(json);
        actions.setSubmitting(false);
        actions.resetForm({
          values: {
            message: "",
          },
        });
      }}
    >
      <Form className={styles.ChatForm} autoComplete="off">
        <Field className={styles.formik_field} id="message" name="message" />
        <Button type="submit" className={styles.submit}>
          <img src={paper_plane} className={styles.paper_plane} alt="" />
        </Button>
      </Form>
    </Formik>
  );
};

const mapStateToProps = (state: any) => ({
  senderId: state.user.userId,
  selectedConversationId: state.entities.selectedConversation,
});

export default connect(mapStateToProps)(ChatForm);
