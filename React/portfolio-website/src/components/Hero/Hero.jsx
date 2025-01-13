import React from "react";
import style from "./Hero.module.css";
import { assets } from "../../assets/hero/hero";

const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Hi, I'am Ankit Malviya</h1>
        <p className={style.description}>
          I'm a full-stack developer having almost 4 years of experience with
          Java and React JS. Reach out if you like to learn more
        </p>
        <a href="mailto:anki7405@gmail.com" className={style.contactMe}>Contact Me</a>
      </div>
      <img className={style.heroImg} src={assets.profileImage} alt="hero-image" />
      <div className={style.topBlur}></div>
      <div className={style.bottomBlur}></div>
    </section>
  );
};

export default Hero;
