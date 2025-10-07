import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchCategory, fetchGender } from "../../features/goodsSlice";
import { setActiveGender } from "../../features/navigationSlice";
import { Banner } from "../Banner/Banner";
import { Goods } from "../Goods/Goods";

export const MainPage = () => {
  const { gender, category } = useParams();
  const dispatch = useDispatch();

  const { activeGender, categories } = useSelector(state => state.navigation);
  const genderData = categories[activeGender];

  // Memoize the data fetching logic
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

  // Get category data safely
  const categoryData = genderData?.list?.find(item => item.slug === category);

  return (
    <>
      <Banner data={genderData?.banner} />
      <Goods categoryData={categoryData} />
    </>
  );
};
