import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import Home from './home';

afterEach(cleanup);

describe('Home', () => {
  it('should exist', () => {
    const comp = render(
      <React.Suspense fallback={<p>Loading...</p>}>
        <Home />
      </React.Suspense>
    );
    expect(comp).toBeDefined();
  });

  it('should booyah', () => {
    const comp = render(
      <React.Suspense fallback={<p>Loading...</p>}>
        <Home />
      </React.Suspense>
    );
    expect(comp.getByText('React Form Validation').textContent).toEqual('React Form Validation');
  });
});
