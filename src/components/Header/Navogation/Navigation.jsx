import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  fecthNavigation,
  setActiveGender,
} from "../../../features/navigationSlice";
import { Container } from "../../Layout/Container/Container";
import { Category } from "./Category/Category";
import { Gender } from "./Gender/Gender";

export const Navigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { status } = useSelector(state => state.navigation);

  // Загружаем данные при монтировании компонента
  useEffect(() => {
    dispatch(fecthNavigation());
  }, [dispatch]);

  useEffect(() => {
    const pathParts = location.pathname.split("/").filter(Boolean);
    const newGender = pathParts[0] || "women";
    dispatch(setActiveGender(newGender));
  }, [location.pathname, dispatch]);

  // Показываем заглушку во время загрузки
  if (status === "loading") {
    return (
      <nav>
        <Container>
          <div>Загрузка...</div>
        </Container>
      </nav>
    );
  }

  return (
    <nav>
      <Container>
        <Gender />
        <Category />
      </Container>
    </nav>
  );
};
