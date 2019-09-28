import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

// const Home = React.lazy(() => import('app/sections/home/home'));
import Home from 'app/sections/home/home';

export const App: React.FC = hot(module)(() => (
  <React.Suspense fallback={<span>loading....</span>}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </React.Suspense>
));
