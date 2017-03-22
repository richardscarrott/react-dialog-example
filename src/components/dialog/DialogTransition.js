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
  console.log('here 2');
  return { opacity: spring(1) };
}

function DialogTransition({ children }) {
  // console.log(children, '<<<<<<<<<');
  return (
    <TransitionMotion
      styles={
        React.Children.count(children)
          ? [
            { key: 'foo', style: { opacity: 1 }, data: { component: children } }
          ]
          : []
      }
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
