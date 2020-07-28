import React from 'react';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  media: {
    tablet: '@media(min-width: 768px)',
    desktop: '@media(min-width: 1280px)',
  },

  color: {
    black: 'black',
    white: 'white',
    grey: 'lightgrey',
  },

  flex: {
    between: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  layoutStyles: (paddingTop) => ({
    background: 'lightgrey',
    textAlign: 'center',
    padding: `${paddingTop}px 0`,
  }),
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
