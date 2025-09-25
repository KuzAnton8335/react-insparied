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

  // Эффект, который выполняется при изменении пути или dispatch
  useEffect(() => {
    // Вычисляем gender прямо в эффекте
    const newGender = location.pathname.split("/")[1] || "women";
    dispatch(setActiveGender(newGender));
  }, [location.pathname, dispatch]); // Зависим только от pathname

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
