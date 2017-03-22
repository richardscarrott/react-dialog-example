import React from 'react';
import { Gateway } from 'react-gateway';
import styles from 'components/dialog/Dialog.css';

function Dialog({ message, style, children }) {
  return (
    <div className={styles.root} style={style}>
      {message}
    </div>
  );
}

function DialogWithGateway({ name, ...rest }) {
  return (
    <Gateway into="dialog">
      <Dialog {...rest} key={name} />
    </Gateway>
  );
}

export default DialogWithGateway;
