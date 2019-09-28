import AppTheme from 'app/components/theme/theme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ErrorBoundary } from './components/error-boundary/error-boundary';

ReactDOM.render(
  <ErrorBoundary>
    <AppTheme />
  </ErrorBoundary>,
  document.getElementById('root')
);
