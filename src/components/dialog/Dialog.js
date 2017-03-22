import React from 'react';
import styles from 'components/dialog/Dialog.css';

function Dialog({ message, children }) {
  return (
    <div className={styles.root}>
      {message}
    </div>
  );
}

export default Dialog;
