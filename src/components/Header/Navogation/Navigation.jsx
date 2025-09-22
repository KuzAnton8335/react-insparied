import { Container } from "../../Layout/Container/Container";
import { Category } from "./Category/Category";
import { Gender } from "./Gender/Gender";

export const Navigation = ({ list }) => {
  return (
    <nav>
      <Container>
        <Gender list={list} />
        <Category list={list} />
      </Container>
    </nav>
  );
};
