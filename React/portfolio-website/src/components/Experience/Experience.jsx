import React from "react";
import style from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

const Experience = () => {
  return (
    <section id="experience" className={style.container}>
      <h2 className={style.title}>Experience</h2>
      <div className={style.content}>
        <div className={style.skillsContainer}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={style.skill}>
                <div className={style.skillImageContainer}>
                  <img className={style.skillImage} src={getImageUrl(skill.imageSrc)} alt="Skill Image" />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={style.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={style.historyItem}>
                <img className={style.historyItemImage}
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={style.historyItemContent}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experince.map((exp, id) => {
                      return <li key={id}>{exp}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
