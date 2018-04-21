import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotecardContainer from './components/NotecardContainer/NotecardContainer';
import Layout from './components/Layout/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={NotecardContainer} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
