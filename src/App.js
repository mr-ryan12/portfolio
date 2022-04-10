import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import FourOhFour from './components/FourOhFour/FourOhFour'
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
        <Route exact path="/projects" render={() => <Projects/>}/>
        <Route exact path="/contact" render={() => <Contact/>}/>
        <Route path="/*" render={() => <FourOhFour/>}/>
      </Switch>
    </main>
  );
}

export default App;
