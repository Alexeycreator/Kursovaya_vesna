import React from 'react';
import moment, { weekdays } from 'moment';
import s from './Calendar.module.css';
import { updateLocale } from 'moment';
import { calendarFormat } from 'moment';
import styled from 'styled-components';


/* moment.updateLocale('en', { week: { dow: 1 } });
const startDay = moment().startOf('month').startOf('week'); */  //начало отсчета

const DayGrid = styled.div`
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
`;

const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6,1fr);
    grid-gap: 1px;
    background-color: gray;
`;

const CellGrid = styled.div`
    min-width: 140px;
    min-height: 80px;
    background-color: ${props => props.isWeekend ? '#27282A' : 'black'};
    color: white;
`;

const RowInCell = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
`;

const CurrentDay = styled.div`
    height: 100%;
    width: 100%;
    background: purple;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const isCurrentDay = (day) => moment().isSame(day, 'day');

const Calendar = ({ startDay }) => {
    const day = startDay.clone().subtract(1, 'day');
    const totalDay = 42;
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());   //массив для элементов в календаре с расчетом на 6 недель

    return (
        <ItemGrid>
            {
                daysArray.map((dayItem) => (
                    <CellGrid
                        key={dayItem.format('DDMMYYYY'), dayItem.unix()}
                        isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
                    >
                        <RowInCell justifyContent={'flex-end'}>
                            <DayGrid>
                                {!isCurrentDay(dayItem) && dayItem.format('D')}
                                {isCurrentDay(dayItem) && <CurrentDay>{dayItem.format('D')}</CurrentDay>}
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