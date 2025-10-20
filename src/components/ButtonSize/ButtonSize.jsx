import style from "./ButtonSize.module.scss";

export const ButtonSize = ({ size }) => {
  const sizeName = size;
  return (
    <div className={style.buttons}>
      <ul className={style.listSize}>
        {sizeName.map(size => (
          <li className={style.itemSize} key={size}>
            <button type="button" className={style.buttonSize}>
              {size}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
