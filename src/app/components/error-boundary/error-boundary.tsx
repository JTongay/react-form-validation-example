import * as React from 'react';

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<{}, State> {
  state = {
    error: null,
    hasError: false
  };

  componentDidCatch(error: any, info: React.ErrorInfo) {
    console.log(error);
    console.log(info);
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    if (error != null) {
      // Check for types of errors and return the page component for the appopriate responses
      // Add your types in the services/errors/errors.ts file
      return <h1>An error happened. Whoopsie!</h1>;
    }
    return this.props.children;
  }
}
