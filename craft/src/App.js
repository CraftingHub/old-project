import React, { useState } from 'react';
import {
  Paper,
  Switch,
  createMuiTheme,
  ThemeProvider,
  CssBaseline
} from '@material-ui/core';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={{ height: '100vh' }}>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Paper>
    </ThemeProvider>
  );
};

export default App;