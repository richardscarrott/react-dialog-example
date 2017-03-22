import React from 'react';
import { TransitionMotion, spring } from 'react-motion';
import styles from './DialogTransition';

// function DialogTransition({ children }) {
//   return (
//     <div className="hello-world">
//       {children}
//     </div>
//   );
// }
function willLeave() {
  return { opacity: spring(0) };
}

function willEnter() {
  return { opacity: 0 };
}

// React.Children.count(children)
//   ? [
//     {
//       key: 'foo',
//       style: { opacity: spring(1) },
//       data: { component: children }
//     }
//   ]
//   : []
function DialogTransition({ children }) {
  console.log(children, '<<<<<<<<<');
  return (
    <TransitionMotion
      styles={React.Children.map(children, el => {
          console.log(el);
          if (!el.key) {
            throw new Error('<Dialog /> must be given a key');
          }
          return {
            key: el.key,
            style: { opacity: spring(1) },
            data: { component: el }
          };
        })}
      willLeave={willLeave}
      willEnter={willEnter}
    >
      {interpolatedStyles => {
          return (
            <div>
              {interpolatedStyles.map(config => {
                  console.log(config);
                  return (
                    <div
                      key={config.key}
                      className={styles.root}
                      style={{ opacity: config.style.opacity }}
                    >
                      {config.data.component}
                    </div>
                  );
                })}
            </div>
          );
        }}
    </TransitionMotion>
  );
}

export default DialogTransition;
