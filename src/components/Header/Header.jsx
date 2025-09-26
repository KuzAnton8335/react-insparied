import { Navigation } from "./Navogation/Navigation";
import { Top } from "./Top/Top";

export const Header = () => {
  return (
    <header className="header">
      <Top />
      <Navigation />
    </header>
  );
};
