import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { App } from './';

// const Nav = React.lazy(() => import('app/components/nav/nav'));
import Nav from 'app/components/nav/nav';

export class Main extends React.Component {
  public render(): React.ReactFragment {
    return (
      <HashRouter>
        <div className="main-container">
          <Nav />
          <App />
        </div>
      </HashRouter>
    );
  }
}
