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
  return { springValue: spring(0) };
}

function willEnter() {
  return { springValue: 0 };
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
          return {
            key: el.key,
            style: { springValue: spring(1) },
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
                  console.log(config.style.springValue);
                  const f = React.cloneElement(config.data.component, {
                    springValue: config.style.springValue
                  });
                  console.log(f, '<--');
                  return (
                    <div key={config.key}>
                      {f}
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
