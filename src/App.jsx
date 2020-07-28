import React from 'react';
import Theme from './utils/theme';
import GlobalStyles from './utils/GlobalStyles';
import './Tasks/Task2';
import './Tasks/Task3';
import './Tasks/Task4';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// pages
import Home from './pages/home';

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path='/test--dentsu-aegis/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Theme>
  );
}

export default App;
