import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { GatewayProvider, GatewayDest } from 'react-gateway';
import DialogTransition from 'components/dialog/DialogTransition';
import styles from 'components/app/App.css';

const DEFAULT_TITLE = '60fram.es React Boilerplate';

function App({ children }) {
  return (
    <GatewayProvider>
      <div className={styles.root}>
        <Helmet
          titleTemplate={`%s | ${DEFAULT_TITLE}`}
          defaultTitle={DEFAULT_TITLE}
        />
        <div className={styles.logo}>
          <Link to="/" title="Home" className={styles.logoContent}>
            60fram.es
          </Link>
        </div>
        {children}
        <GatewayDest name="dialog" component={DialogTransition} />
      </div>
    </GatewayProvider>
  );
}

export default App;
