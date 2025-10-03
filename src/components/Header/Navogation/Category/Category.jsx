// Импорт библиотеки для условного объединения CSS классов
import classNames from "classnames";
// Импорт компонентов для навигации из react-router-dom
import { NavLink } from "react-router-dom";
// Импорт CSS модуля для стилизации
import { useSelector } from "react-redux";
import style from "./Category.module.scss";

// Компонент Category принимает пропс list с данными категорий
export const Category = () => {
  // Если путь корневой, используем "women" по умолчанию
  const { activeGender, categories } = useSelector(state => state.navigation);

  // Рендерим список категорий
  return (
    <ul className={style.category}>
      {/* Маппим массив категорий в элементы списка */}
      {categories[activeGender]?.list?.map(item => (
        <li key={item.slug} className={style.item}>
          {/* NavLink для навигации с автоматическим определением активного состояния */}
          <NavLink
            // Формируем путь: /gender/category (например: /women/dresses)
            to={`/catalog/${activeGender}/${item.slug}`}
            // Условное применение стилей: обычная ссылка и активная ссылка
            className={({ isActive }) =>
              classNames(style.link, isActive && style.linkActive)
            }
          >
            {/* Отображаем название категории */}
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
