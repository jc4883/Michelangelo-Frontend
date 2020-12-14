import React from "react";
import Button from "components/common/Button/Button";

import { Formik, Form, Field } from "formik";

import styles from "./LoginForm.module.scss";

interface FormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const initialValues: FormValues = { username: "", password: "" };
  return (
    <div className={styles.LoginForm}>
      <h1>Welcome to Michelangelo</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form className={styles.formik_form} autoComplete="off">
          <label>Username</label>
          <Field
            className={styles.formik_field}
            id="username"
            name="username"
          />
          <label>Password</label>
          <Field
            className={styles.formik_field}
            id="password"
            name="password"
          />
          <Button type="submit" className={styles.login_button}>
            Sign In
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
