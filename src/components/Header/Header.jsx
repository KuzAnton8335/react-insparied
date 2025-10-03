import style from "./Header.module.scss";
import { Navigation } from "./Navogation/Navigation";
import { Top } from "./Top/Top";

export const Header = () => {
  return (
    <header className={style.header}>
      <Top />
      <Navigation />
    </header>
  );
};
