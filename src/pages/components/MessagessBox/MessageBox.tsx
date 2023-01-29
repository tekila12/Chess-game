import React from 'react';

import styles from "@/styles/Home.module.css";
const MessageBox: React.FunctionComponent = () => {
  return (
    <div>
        <input className={styles.messageInput}/>
</div>
  );
};

export default MessageBox;