import React from 'react';
import moment, { weekdays } from 'moment';
import s from './Calendar.module.css';
import { updateLocale } from 'moment';
import { calendarFormat } from 'moment';

const Calendar = (props) => {

    /* moment.updateLocale('en', {week: {dow: 1}});
    const startDay = moment().startOf('month').startOf('week');         //начало недели с учетом месяца
    const endDay = moment().endOf('month').endOf('week');               //конец недели

    const viewCalendar = [];
    const day = startDay.clone();
    do{
        viewCalendar.push(day.clone());
        day.add(1,'day');
    }
    while(day.isAfter(endDay))

    //проверка в консоли
    console.log(startDay.format("DD-MM-YYYY"));
    console.log(endDay.format("DD-MM-YYYY"))  */

    const totalDay = 42;
    const daysArray = [...Array(42)];

    return (
        <div className={s.itemGrid}>
            {
                daysArray.map((_,i) => (
                    <div>
                        {i}
                    </div>
                ))
            }
        </div>
    );
};

export default Calendar;