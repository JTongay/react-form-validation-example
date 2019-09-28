import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { Main } from 'app/main';
import * as React from 'react';

const AppTheme: React.FC<{}> = () => {
  const getTheme = () => {
    return createMuiTheme({
      palette: {
        primary: {
          main: blue[800]
        },
        secondary: {
          main: red[900]
        },
        type: 'light'
      },
      spacing: {
        unit: 16
      },
      typography: {
        useNextVariants: true
      }
    });
  };

  return (
    <MuiThemeProvider theme={getTheme()}>
      <Main />
    </MuiThemeProvider>
  );
};

export default AppTheme;
