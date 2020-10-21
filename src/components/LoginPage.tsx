import React from "react";
import LoginForm from "./LoginForm";

import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <section className={styles.LoginPage}>
      <div className={styles.login_page_img_container}>
        <img
          className={styles.login_page_img}
          src="https://translator-app-assets.s3.amazonaws.com/1089265565-huge.jpg"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.login_form}>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

/*
        <div className={styles.login_page_img_container}>
          <img
            className={styles.login_page_img}
            src="https://translator-app-assets.s3.amazonaws.com/1089265565-huge.jpg"
          />
        </div>
*/
