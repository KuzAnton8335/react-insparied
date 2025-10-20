import { NavLink } from "react-router-dom";
import Like from "../../assets/icons/heart.svg?react";
import { API_URL } from "../../const";
import { ColorList } from "../ColorList/ColorList";
import style from "./Product.module.scss";

export const Product = ({ id, pic, title, price, colors = [] }) => {
  // `/package.jsonproduct/${id}`
  return (
    <article className={style.product}>
      <NavLink to={`/product/${id}`} className={style.link}>
        <img src={`${API_URL}/${pic}`} className={style.image} />
        <h3 className={style.title}>{title}</h3>
      </NavLink>
      <div className={style.row}>
        <p className={style.price}> {price} руб</p>
        <button className={style.favorite}>
          <Like />
        </button>
      </div>
      <ColorList colors={colors} />
    </article>
  );
};
