import { useSelector } from "react-redux";
import { Color } from "./Color/Color";
import style from "./ColorList.module.scss";

export const ColorList = ({ colors }) => {
  const { colorList } = useSelector(state => state.color);

  if (!colors || !Array.isArray(colors)) {
    return null;
  }

  return (
    <ul className={style.colorList}>
      {colors.map((id, i) => {
        const color = colorList.find(color => color.id === id);
        return <Color key={id} color={color?.code} check={!i} />;
      })}
    </ul>
  );
};
