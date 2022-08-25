import React from 'react'
import './About.css'
import me from '../../assests/me_pic.jpg'
import {FaAward} from 'react-icons/fa'
import { AiOutlineProject } from 'react-icons/ai'
import {IoGameController} from'react-icons/io5'
const About = () => {
  return (
    <section id="About">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="me_about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Competitive Programmer</h5>
              <small>C++</small>
              <br />
              <small>Python</small>
            </article>
            <article className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Web Developer</h5>
              <small>ReactJs.</small>
              <br />
              <small>RESTAPIs with SpringBoot</small>
            </article>
            <article className="about__card">
              <IoGameController className="about__icon" />
              <h5>Game Developer</h5>
              <small>Unreal-Engine 4</small>
            </article>
          </div>
          <p>ABOUT...INFO</p>

          <a href="#Contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About
