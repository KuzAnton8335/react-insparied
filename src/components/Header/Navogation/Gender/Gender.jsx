import style from "./Gender.module.scss";
import { NavLink } from 'react-router-dom';
import classNames from "classnames";
const list = [
  { link: "women", title: "Женщины" },
  { link: "men", title: "Мужчины" },
];

export const Gender = () => {
  return (
    <ul className={style.gender}>
      {list.map(item => (
        <li key={item.link} className={style.item}>
          <NavLink to={item.link} className={({isActive}) =>
            classNames (style.link, isActive && style.linkActive)}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
