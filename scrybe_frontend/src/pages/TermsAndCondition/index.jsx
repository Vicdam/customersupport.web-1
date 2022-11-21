import React from "react";
import Content from "./components/Content";
import styles from "./TermsAndCondition.module.scss";

function TermsOfService() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageHeader}>Terms And Condition</h1>
      <Content />
    </div>
  );
}
export default TermsOfService;
