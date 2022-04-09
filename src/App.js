import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import './App.scss';

const App = () => {
  return (
    <main className="App">
      <Header/>
      <Landing/>
      <Switch>
        <Route exact path="/"/>
        <About/>
      </Switch>
    </main>
  );
}

export default App;
