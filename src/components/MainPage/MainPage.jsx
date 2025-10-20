import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategory, fetchGender } from "../../features/goodsSlice";
import { setActiveGender } from "../../features/navigationSlice";
import { Banner } from "../Banner/Banner";
import { Goods } from "../Goods/Goods";

export const MainPage = () => {
  const { gender, category } = useParams();
  const dispatch = useDispatch();
  const [shouldShowBanner, setShouldShowBanner] = useState(true);

  const { activeGender, categories } = useSelector(state => state.navigation);
  const genderData = categories[activeGender];

  const fetchData = useCallback(() => {
    if (gender && category) {
      dispatch(fetchCategory({ gender, category }));
    } else if (gender) {
      dispatch(fetchGender(gender));
    }
  }, [gender, category, dispatch]);

  useEffect(() => {
    if (gender && gender !== activeGender) {
      dispatch(setActiveGender(gender));
    }
  }, [gender, activeGender, dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Управление отображением баннера с задержкой
  useEffect(() => {
    if (category) {
      // Устанавливаем таймер для скрытия баннера
      const timer = setTimeout(() => {
        setShouldShowBanner(false);
      }, 3000); // Задержка 300ms

      return () => clearTimeout(timer);
    } else {
      // Показываем баннер сразу, если категории нет
      setShouldShowBanner(true);
    }
  }, [category]);

  const categoryData = genderData?.list?.find(item => item.slug === category);

  return (
    <>
      {!category && shouldShowBanner && <Banner data={genderData?.banner} />}
      <Goods categoryData={categoryData} />
    </>
  );
};
