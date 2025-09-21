import { useRouteError } from "react-router-dom";
import style from "./ErrorPage.module.scss";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className={style.container}>
      <h1>Ошибка 404</h1>
      <p>{error?.message || "Неивестная ошибка"}</p>
    </div>
  );
};
