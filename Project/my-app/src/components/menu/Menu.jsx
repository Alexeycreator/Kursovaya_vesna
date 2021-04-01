import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Menu.module.css";

const Menu = (props) => {

  let newTextElement = React.createRef();

  let addText = () => {
    props.addText();
  };
  
  let onChangeTextNew = () => {
    let text = newTextElement.current.value;
    props.updateText(text);
  }

  return (
    <nav className={s.menu}>
      <div className={s.viborServisa}>Выберите сервис:</div>
      <div className={s.item}>
        <NavLink to="/agregator" activeClassName={s.activeLink}>
          агрегатор
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/google" activeClassName={s.activeLink}>
          google  
        </NavLink>  
      </div>
      <div className={s.item}>
        <NavLink to="/yandex" activeClassName={s.activeLink}>
          yandex
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/outlook" activeClassName={s.activeLink}>
          outlook
        </NavLink>  
      </div>
      
      <textarea onChange={onChangeTextNew} ref={newTextElement} value={props.newTextElement}></textarea>
      <button>Добавить событие</button>
    </nav>
  );
};

export default Menu;