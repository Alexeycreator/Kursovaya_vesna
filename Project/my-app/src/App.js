import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Menu from './components/menu/Menu';
import MainInformation from './components/main/MainInformation/Maininformation';



function App(props) {
  return (
    <div className="App">
      <Header />
      <Main />
      <Menu />
      <MainInformation />
    </div>
  );
}

export default App;