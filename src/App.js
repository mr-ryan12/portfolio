import React from 'react';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing'
import './App.scss';

const App = () => {
  return (
    <main className="App">
      <Header/>
      <Landing/>
    </main>
  );
}

export default App;
