import React from "react";
import { assets } from "../../assets/about/about";
import  style from './About.module.css';

const About = () => {
  return (
    <section className={style.container} id="about">
      <h2 className={style.title}>About</h2>
      <div className={style.content}>
        <img
          className={style.aboutImage}
          src={assets.aboutImage}
          alt="Image sitting with laptop"
        />
        <ul className={style.aboutItems}>
          <li className={style.aboutItem}>
            <img
              className={style.aboutItemImage}
              src={assets.serverIcon}
              alt="backend-dev-icon"
            />
            <div className={style.aboutItemText}>
              <h3 className={style.aboutItemTextTitle}>Backend Developer</h3>
              <p className={style.aboutItemTextDesc}>
                I'm a backend developer having experince building scalable and
                optimised applications and API using Java and Spring boot
              </p>
            </div>
          </li>
          <li className={style.aboutItem}>
            <img
              className={style.aboutItemImage}
              src={assets.cursorIcon}
              alt="frontend-dev-icon"
            />
            <div className={style.aboutItemText}>
              <h3 className={style.aboutItemTextTitle}>Frontend Developer</h3>
              <p className={style.aboutItemTextDesc}>
                I'm frontend developer with experince in building responsive and
                optimised websites using React JS, JS, CSS and HTML
              </p>
            </div>
          </li>
          <li className={style.aboutItem}>
            <img
              className={style.aboutItemImage}
              src={assets.cloudImage}
              alt="cloud-dev-icon"
            />
            <div className={style.aboutItemText}>
              <h3 className={style.aboutItemTextTitle}>Cloud Engineer</h3>
              <p className={style.aboutItemTextDesc}>
                I'm AWS Certified Cloud Practitioner, having experince working
                with cloud services
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
