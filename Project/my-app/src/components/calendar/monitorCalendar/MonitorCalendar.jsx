import React from 'react';
import styled from 'styled-components';
import s from './MonitorCalendar.module.css';


//тут применить цвет надо
const DivWrapper = styled('div')`
 display: flex;
 justify-content: space-between;
 pudding: 16px;
`;

const TextWrapper = styled('span')`
font-size: 32px;
`;

const TitleWrapper = styled(TextWrapper)`
font-weight: bold;
margin-right: 8px;
`;

const MonitorCalendar = () => {
    return (
        <DivWrapper>
            <div>
                <TitleWrapper>Mart</TitleWrapper>
                <TextWrapper>2021</TextWrapper>
            </div>
            <div>
                <button>&lt;</button>
                <button>Today</button>
                <button>&gt;</button>
            </div>
        </DivWrapper>
    );
}

export default MonitorCalendar;