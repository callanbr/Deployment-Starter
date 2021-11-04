import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './views/Home';

class App extends Component {
  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>Deployment-Starter</title>
        </Helmet>
        <Router basename='/'>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </HelmetProvider>
    );
  }
}

export default App;
