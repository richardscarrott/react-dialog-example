import React from 'react';
import { Gateway } from 'react-gateway';
import styles from 'components/dialog/Dialog.css';

function mapRange(from, to, val) {
  return (val - from[0]) * (to[1] - to[0]) / (from[1] - from[0]) + to[0];
}

function Dialog({ message, style, springValue, children }) {
  return (
    <div
      className={styles.root}
      style={Object.assign({}, style, { opacity: springValue })}
    >
      <div
        style={
          {
            transform: `rotate(${mapRange(
              [ 0, 1 ],
              [ 0, 360 ],
              springValue
            )}deg)`
          }
        }
      >
        Something rotating. (or imagine overlay fading at different rate.)
      </div>
      {message}
    </div>
  );
}

function DialogWithGateway({ name, style, ...rest }) {
  if (!name) {
    // erm, propTypes?
    throw new Error('<Dialog /> must be given a `name`');
  }
  return (
    <Gateway into="dialog">
      <Dialog {...rest} key={name} style={style} />
    </Gateway>
  );
}

export default DialogWithGateway;
