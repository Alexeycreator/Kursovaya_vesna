import React from 'react';
import s from './MainInformation.module.css';

const MainInformation = (props) => {
    return (
      <div className={s.mainContent}>
        <textarea></textarea>
        <button>Удалить событие</button>
        <button>Изменить событие</button>
      </div>
    );
  };
  
  export default MainInformation;