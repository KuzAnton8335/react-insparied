import classNames from "classnames";
import style from "./Color.module.scss";

export const Color = ({ color, check }) => {
  // const colorRef = useRef(null);

  // useEffect(() => {
  //   colorRef.current.style.setProperty("--data-color", color);
  // }, [color]);

  return (
    <li
      style={{ "--data-color": color }}
      className={classNames(style.color, check ? style.colorCheck : "")}
    ></li>
  );
};
