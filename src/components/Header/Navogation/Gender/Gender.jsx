import classNames from "classnames";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./Gender.module.scss";

export const Gender = () => {
  const { activeGender, genderList, categories } = useSelector(
    state => state.navigation
  );

  return (
    <ul className={style.gender}>
      {genderList.map(gender => (
        <li key={gender} className={style.item}>
          <NavLink
            to={`/catalog/${gender}`}
            className={({ isActive }) =>
              classNames(
                style.link,
                (isActive || gender === activeGender) && style.linkActive
              )
            }
          >
            {categories[gender]?.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
