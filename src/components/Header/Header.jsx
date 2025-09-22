import { Top } from "./Top/Top";
import { Navigation } from "./Navogation/Navigation";

export const Header = ({ list }) => {
  return (
    <header className="header">
      <Top />
      <Navigation list={list} />
    </header>
  );
};
