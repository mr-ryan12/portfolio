import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import './App.scss';

const App = () => {
  return (
    <main className="App">
      <Header/>
      <Landing/>
      <Switch>
        <Route exact path="/"/>
        <Route exact path="/about" render={() => <About/>}/>
        <Route exact path="/resume" render={() => <Resume/>}/>
      </Switch>
    </main>
  );
}

export default App;
