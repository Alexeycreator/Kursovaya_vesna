import './App.css';
import React, { useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Menu from './components/menu/Menu';
import MainInformation from './components/main/MainInformation/Maininformation';
import moment from 'moment';
import { Route } from 'react-router';
import CalendarGoogle from './components/calendarGoogle/CalendarGoogle';
import CalendarYandex from './components/calendarYandex/CalendarYandex';
import CalendarOutlook from './components/calendarOutlook/CalendarOutlook';
import { addText, updateText } from './Redux/Basis';




function App(props) {

  moment.updateLocale('en', {week: {dow: 1}});
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf('month').startOf('week');

  //навигация
  const previeMath = ()=>{
    setToday(prev=>prev.clone().subtract(1, 'month'));
  };
  const todayMath=()=>{
    setToday(moment())
  };
  const nextMath=()=>{
    setToday(prev=>prev.clone().add(1, 'month'));
  };

  return (
    <div className="App">
      <Header />
      <Menu       
      addText={addText}
      updateText={updateText} />
      <div className="AppMain">
      <Route path="/agregator" render={()=><Main startDay={startDay} 
      today={today} 
      previeMath={previeMath} 
      todayMath={todayMath} 
      nextMath={nextMath} />}>
      </Route>
      <Route path="/google" render={()=><CalendarGoogle />}></Route>
      <Route path="/yandex" render={()=><CalendarYandex />}></Route>
      <Route path="/outlook" render={()=><CalendarOutlook />}></Route>
      </div>
      <MainInformation />
    </div>
  );
}

export default App;