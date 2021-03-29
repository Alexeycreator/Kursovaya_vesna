import React from 'react';
import Calendar from '../calendar/Calendar';
import s from './Main.module.css';
import moment from 'moment';
import HeaderCalendar from '../calendar/headerCalendar/HeaderCalendar';
import MonitorCalendar from '../calendar/monitorCalendar/MonitorCalendar';
import styl from 'styled-components';

const ShadowWrapper = styl('div')`
border-top: 1px solid #737374;
border-left: 1px solid #464648;
border-right: 1px solid #464648;
border-bottom: 2px solid #464648;
border-radius: 8px;
overflow:hidden;
box-shadow: 0 0 0 1px #1A1A1A, 0 8px 20px 6px #888;
`;

const Main = (props) => {
  return (
    <div className={s.mainContent}>
      <ShadowWrapper>
        <HeaderCalendar />
        <MonitorCalendar />
        <Calendar />
      </ShadowWrapper>
    </div>
  );
};

export default Main;