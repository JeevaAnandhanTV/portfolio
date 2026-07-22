import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import "./Education.css";

export default function Education() {
  return (
    <section className="education glass panel">
      <h2 className="panel-title">
        <GiGraduateCap className="panel-title__icon" />
        Education
      </h2>

      <div className="education__item">
        <span className="education__icon">
          <GiGraduateCap />
        </span>
        <div className="education__body">
          <div className="education__row">
            <h3 className="education__degree">B.Tech in COmputer Science And Engineering </h3>
            <span className="education__date">2020 - 2024</span>
          </div>
          <p className="education__school">
            Periyar Maniammai Institute of Science & Technology, Vallam, Thanjavur
          </p>
        </div>
      </div>
    </section>
  );
}
