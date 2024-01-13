import React from "react";
import styles from "../styles/EmptyItemsMessage.module.css";

const EmptyItemsMessage = () => {
  return (
    <div>
      <h1 className={styles.message}>all tasks completed</h1>
    </div>
  );
};

export default EmptyItemsMessage;
