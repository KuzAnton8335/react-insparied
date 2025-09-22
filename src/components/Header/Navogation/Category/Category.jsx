// Импорт библиотеки для условного объединения CSS классов
import classNames from "classnames";
// Импорт компонентов для навигации из react-router-dom
import { NavLink, useLocation } from "react-router-dom";
// Импорт CSS модуля для стилизации
import style from "./Category.module.scss";

// Компонент Category принимает пропс list с данными категорий
export const Category = ({ list }) => {
  // Хук useLocation для получения информации о текущем URL
  const location = useLocation();
  // Извлекаем сегмент пути (например, "women" из "/women/dresses")
  // Если путь корневой, используем "women" по умолчанию
  const gender = location.pathname.split("/")[1] || "women";

  // Находим объект с категориями для текущего гендера
  const categoriesList = list.find(item => item.link === gender);

  // Рендерим список категорий
  return (
    <ul className={style.category}>
      {/* Маппим массив категорий в элементы списка */}
      {categoriesList.categories.map(item => (
        <li key={item.link} className={style.item}>
          {/* NavLink для навигации с автоматическим определением активного состояния */}
          <NavLink
            // Формируем путь: /gender/category (например: /women/dresses)
            to={`${gender}/${item.link}`}
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
