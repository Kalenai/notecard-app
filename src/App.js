import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Notecards from './containers/Notecards/Notecards';
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Notecards} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
