import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { API_URL } from "../../const";
import { fetchGoodsId } from "../../features/goodsSlice";
import { ButtonSize } from "../ButtonSize/ButtonSize";
import { ColorList } from "../ColorList/ColorList";
import { Container } from "../Layout/Container/Container";
import style from "./ProductPage.module.scss";

export const ProductPage = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();

  // Получить данные о текущем товаре
  const productDetails = useSelector(state => state.goods.productDetails);
  const status = useSelector(state => state.goods.productDetailsStatus);
  const error = useSelector(state => state.goods.error);

  // Загружаем данные при монтировании компонента, например, по id
  useEffect(() => {
    if (productId) {
      dispatch(fetchGoodsId(productId));
    }
  }, [productId, dispatch]);

  // Проверка статуса загрузки
  if (status === "loading") {
    return <div>Загрузка...</div>;
  }
  if (status === "failed") {
    return <div>Ошибка: {error}</div>;
  }
  if (!productDetails) {
    return null; // или какой-то компонент-заглушка
  }
  return (
    <div className={style.productPage}>
      <Container>
        <div className={style.content}>
          <div className={style.leftContent}>
            <img
              src={`${API_URL}/${productDetails.pic}`}
              alt={productDetails.description}
              className={style.imageContent}
            />
          </div>
          <div className={style.rightContent}>
            <h3 className={style.title}>{productDetails.title}</h3>
            <p className={style.price}>руб {productDetails.price}</p>
            <div className={style.article}>
              Артикул{" "}
              <span className={style.articleNumber}>{productDetails.id}</span>
            </div>
            <div className={style.colors}>
              <p className={style.name}>Цвет</p>
              {/* разобратся с этим */}
              <ColorList colors={productDetails.colors} />
            </div>
            <div className={style.size}>
              <p className={style.name}>Размер</p>
              <ButtonSize size={productDetails.size} />
            </div>
            <div className={style.description}>
              <p className={style.name}>Описание</p>
              <span className={style.descriptionText}>
                {productDetails.description}
              </span>
            </div>
            <div className={style.buttonCount}>
              <div className={style.buttonCountborder}>
                <button className={style.btnMinus}>-</button>
                <span className={style.count}>1</span>
                <button className={style.btnPlus}>+</button>
              </div>
              <button className={style.btnCart}>в Корзину</button>
              <button className={style.topLink}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
