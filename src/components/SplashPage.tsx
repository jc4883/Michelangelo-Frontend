import React from "react";
import { Link } from "react-router-dom";

import styles from "./SplashPage.module.scss";

const SplashPage = () => {
  return (
    <section className={styles.SplashPage}>
      <nav className={styles.navigation}>
        <div className={styles.container}>
          <div className={styles.brand}>
            <span>Michelangelo</span>
          </div>
          <div className={styles.menu}>
            <Link to="/login" className={styles.login_button}>
              Login
            </Link>
          </div>
        </div>
      </nav>

      <section className={styles.lead_content}>
        <div className={styles.lead}>
          <h1>
            A Messaging Service
            <br /> That Translates Everything
          </h1>
          <p className={styles.subtitle}>
            Send a text in one language, receive texts in another. It's free,
            and for the web.
          </p>
        </div>
      </section>

      <section className={styles.features_content}>
        <h1 className={styles.features_content_header}>
          Break Down the Language Barrier
        </h1>
        <div className={styles.features}>
          <div>
            <h2>Find friends</h2>
            <p>
              Add anyone to your friends list by simply searching for their
              email address, phone number, or name.
            </p>
          </div>
          <div>
            <h2>Easy to use</h2>
            <p>
              Set your translation settings to any language by default or
              translate each message manually.
            </p>
          </div>
          <div>
            <h2>Accessible</h2>
            <p>
              All you need is the web. Use it anywhere you have internet
              service.
            </p>
          </div>
          <div>
            <h2>Sleek</h2>
            <p>Enjoy an award winning UI and delightful design.</p>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>
          <strong>Made with {"<3"} from P+T</strong>
        </p>
      </footer>
    </section>
  );
};

export default SplashPage;
