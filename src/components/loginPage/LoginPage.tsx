import React from "react";
import styles from "./LoginPage.module.scss";
import UserIdForm from "./UserIdForm";

const LoginPage = (props: any) => {
  return (
    <section className={styles.LoginPage}>
      <div className={styles.login_page_img_container}>
        <img
          className={styles.login_page_img}
          src="https://translator-app-assets.s3.amazonaws.com/1089265565-huge.jpg"
          alt=""
        />
      </div>
      <div className={styles.container}>
        <div className={styles.login_form}>
          {/* <LoginForm /> */}
          <UserIdForm />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
