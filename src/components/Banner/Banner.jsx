import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { API_URL } from "../../const";
import { Container } from "../Layout/Container/Container";
import style from "./Banner.module.scss";

export const Banner = ({ data }) => {
  // console.log("Background images:", data?.bg);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBackgroundImage = () => {
    if (windowWidth < 541) return `${API_URL}/${data.bg?.mobile}`;
    if (windowWidth < 769) return `${API_URL}/${data.bg?.tablet}`;
    if (windowWidth < 1025) return `${API_URL}/${data.bg?.laptop}`;
    return `${API_URL}/${data?.bg?.desktop}`;
  };

  const bannerStyle = {
    backgroundImage: `url(${getBackgroundImage()})`,
    backgroundColor: "#404040",
  };

  if (!data) return null;
  console.log(data.bg);
  return (
    data && (
      <section className={style.banner} style={bannerStyle}>
        <Container>
          <div className={style.content}>
            <h2 className={style.title}>{data.description}</h2>
            <NavLink to={`/product/${data.id}`} className={style.link}>
              Перейти
            </NavLink>
          </div>
        </Container>
      </section>
    )
  );
};
