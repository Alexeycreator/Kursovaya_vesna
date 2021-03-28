import React from 'react';
import Calendar from '../calendar/Calendar';
import s from './Main.module.css';


const Main = (props) => {
    return (
      <div className={s.mainContent}>
        <Calendar />
      </div>
    );
  };
  
  export default Main;