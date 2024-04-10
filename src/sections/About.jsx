import headshot from "../assets/headshot-upscale.jpg";
import { SiCodecademy } from "react-icons/si";
import { PiGraduationCap } from "react-icons/pi";
import { MdOutlinePhotoCameraFront } from "react-icons/md";

function About() {
  return (
    <section className="about-wrapper">
      <div className="headshot-wrapper">
        <div className="icon-wrapper">
          <MdOutlinePhotoCameraFront className="icon" id="headshot-icon" />
        </div>
        <img src={headshot} id="headshot-img" />
      </div>
      <span className="about-span">
        Hiya! My name is Elliott {"("}2 L{"'"}s, 2 T{"'"}s{")"} Saruski {"("}
        <em>sa-roo-ski</em>
        {")"}, a Marketer turned Front-End Engineer - based in Miami, FL - with
        a specialty in <strong>ReactJS.</strong> In my spare time I make{" "}
        <a href="https://soundcloud.com/envimusic">
          <strong>electronic music</strong>
        </a>
        , <strong>3D graphics</strong>, & other <strong>multimedia</strong>. I
        {"'"}m currently looking to join a team of developers who would find
        benefit from my keen eye for detail and endless desire for learning.
        Ideally, I would like to incorporate my deep passion for music
        technology with the development of interactive digital experiences, from
        DAWS, VSTs, and Web Audio Applications to musician / producer focused
        products or services.
      </span>
      <div className="education-wrapper">
        <h3>Education</h3>
        <div className="education">
          <div className="education-item" id="coding">
            <SiCodecademy className="icon" />
            <h5 className="education-time-frame">2022-23</h5>
            <p className="education-type">Front-End Engineer Career Path</p>
            <p>Codecademy.com</p>
          </div>
          <div className="education-item" id="marketing">
            <PiGraduationCap className="icon" />
            <h5 className="education-time-frame">2020</h5>
            <p className="education-type">B.S. Marketing</p>
            <p>Florida State University</p>
          </div>
        </div>
      </div>
      <div className="skills-wrapper">
        <div className="skill">
          <h3>Skills</h3>
          <h5>Languages</h5>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
          </ul>
        </div>
        <div className="skill">
          <h5>Frameworks / Libraries</h5>
          <ul className="skills-list">
            <li>ReactJS</li>
            <li>Vite</li>
            <li>Node.js</li>
            <li>Redux</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
            <li>Tone.js</li>
            <li>Web Audio API</li>
          </ul>
        </div>
        <div className="skill">
          <h5>Tools / Software</h5>
          <ul className="skills-list">
            <li>Git</li>
            <li>Netlify</li>
            <li>Lighthouse</li>
            <li>Figma</li>
            <li>Adobe CC</li>
            <li>Ableton Live</li>
            <li>Blender 3D</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
