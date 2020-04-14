import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Router } from 'react-router-dom';
import history from '../../utils/history';

import HomePage from '../HomePage/Loadable';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
