import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="Experience">
      <h5>Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>HTML</h4>
              </div>
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
              </div>
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>JavaScript</h4>
              </div>
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>ReactJs</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>MySQL</h4>
              </div>
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>SpringBoot</h4>
              </div>
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Java</h4>
              </div>
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>REST APIs</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience