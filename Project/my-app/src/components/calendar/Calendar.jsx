import React from 'react';
import moment, { weekdays } from 'moment';
import s from './Calendar.module.css';
import { updateLocale } from 'moment';
import { calendarFormat } from 'moment';
import styl from 'styled-components';

const startDay = moment().startOf('month').startOf('week');  //начало отсчета

const DayGrid = styl.div`
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ItemGrid = styl.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6,1fr);
    grid-gap: 1px;
    background-color: gray;
`;

const CellGrid = styl.div`
    min-width: 140px;
    min-height: 80px;
    background-color: ${props=>props.isWeekend ? '#27282A' : 'black'};
    color: white;
`;

const RowInCell = styl.div`
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
`;

const Calendar = () => {
    const day = startDay.clone().subtract(1, 'day');
    const totalDay = 42;
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());   //массив для элементов в календаре с расчетом на 6 недель

    return (
        <ItemGrid>
            {
                daysArray.map((dayItem) => (
                    <CellGrid
                        key={dayItem.format('DDMMYYYY')}
                        isWeekend={dayItem.day()===6 || dayItem.day()=== 0}
                    >
                        <RowInCell
                            justifyContent={'flex-end'}
                        >
                            <DayGrid>
                                {dayItem.format('D')}
                            </DayGrid>
                        </RowInCell>
                    </CellGrid>
                ))
            }
        </ItemGrid>
    );
};

export default Calendar;


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