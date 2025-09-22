// Импорт необходимых хуков и компонентов
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setActiveGender } from "../../../features/navigationSlice";
import { Container } from "../../Layout/Container/Container";
import { Category } from "./Category/Category";
import { Gender } from "./Gender/Gender";

// TODO: Остановился на этой части по навигации (21:10) прокомментировать файлы redux store rootStore

// Компонент навигации, принимающий список категорий через props
export const Navigation = ({ list }) => {
  // Получение функции dispatch для отправки actions в Redux store
  const dispatch = useDispatch();

  // Хук useLocation для получения информации о текущем URL
  const location = useLocation();

  // Если путь корневой ("/"), используем "women" по умолчанию
  const gender = location.pathname.split("/")[1] || "women";

  // Эффект, который выполняется при изменении пути или dispatch
  useEffect(() => {
    // Разбиваем путь на сегменты и извлекаем первый сегмент (например, "women" из "/women/dresses")

    // Отправляем action для установки активного гендера в Redux store
    dispatch(setActiveGender(gender));
  }, [gender, dispatch]); // Зависимости: эффект срабатывает при изменении пути или dispatch

  // Рендер компонента навигации
  return (
    <nav>
      {/* Контейнер для стилизации и ограничения ширины */}
      <Container>
        {/* Компонент выбора гендера (мужской/женский) */}
        <Gender list={list} />
        {/* Компонент отображения категорий товаров */}
        <Category list={list} />
      </Container>
    </nav>
  );
};
