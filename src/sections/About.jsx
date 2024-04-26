import headshot from "../assets/es-headshot.jpg";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiReact } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobecreativecloud } from "react-icons/si";
import { SiAbletonlive } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { MdOndemandVideo } from "react-icons/md";

function About() {
  return (
    <section className="about-wrapper">
      <div className="about-me">
        <img src={headshot} id="headshot-img" />
        <span className="about-span">
          Hiya! My name is Elliott {"("}2 L{"'"}s, 2 T{"'"}s{")"} Saruski {"("}
          <em>sa-roo-ski</em>
          {")"}, a Marketer turned Front-End Engineer - based in Miami, FL -
          with a specialty in <strong>ReactJS.</strong> In my spare time I make{" "}
          <a href="https://soundcloud.com/envimusic">
            <strong>electronic music</strong>
          </a>
          , <strong>3D graphics</strong>, & other <strong>multimedia</strong>
          <br></br>
          <br></br> I{"'"}m currently looking to join a team of developers who
          would find benefit from my keen eye for detail and endless desire for
          learning.
          {/* <br></br>
          <br></br>Ideally, I would like to incorporate my deep passion for
          music technology with the development of interactive digital
          experiences, from DAWS, VSTs, and Web Audio Applications to musician /
          producer focused products or services. */}
        </span>
      </div>
      <h3>Education</h3>
      <div className="education-wrapper">
        <div className="education">
          <div className="education-item" id="coding">
            <div className="education-info-wrapper">
              <p className="education-time-frame">2022-23</p>
              <h5 className="education-type">Front-End Engineer Career Path</h5>
              <p>Codecademy.com</p>
            </div>
          </div>
          <div className="education-item" id="marketing">
            <div className="education-info-wrapper">
              <p className="education-time-frame">2016-20</p>
              <h5 className="education-type">B.S. Marketing</h5>
              <p>Florida State University</p>
            </div>
          </div>
        </div>
      </div>

      <h3>My Tech Stack</h3>
      <div className="skills-wrapper">
        <div className="skill">
          <h5>Framework + Runtime</h5>
          <ul className="skills-list">
            <li>
              <SiReact className="skill-icon" />
              <p>ReactJS</p>
            </li>
            <li>
              <SiVite className="skill-icon" />
              <p>Vite</p>
            </li>
            <li>
              <FaNodeJs className="skill-icon" />
              <p>Node.js</p>
            </li>
          </ul>
        </div>
        <div className="skill">
          <h5>Languages</h5>
          <ul className="skills-list">
            <li>
              <FaHtml5 className="skill-icon" />
              <p>HTML5</p>
            </li>
            <li>
              <FaCss3Alt className="skill-icon" />
              <p>CSS3</p>
            </li>
            <li>
              <RiJavascriptFill className="skill-icon" />
              <p>JavaScript (ES6+)</p>
            </li>
          </ul>
        </div>
        <div className="skill">
          <h5>Other Tools and Tech</h5>
          <ul className="skills-list">
            <li>
              <IoLogoFigma className="skill-icon" />
              <p>Figma</p>
            </li>
            <li>
              <TbBrandFramerMotion className="skill-icon" />
              <p>Framer Motion</p>
            </li>
            <li>
              <SiAdobecreativecloud className="skill-icon" />
              <p>Adobe CC</p>
            </li>
            <li>
              <SiAbletonlive className="skill-icon" />
              <p>Ableton Live</p>
            </li>
            <li>
              <SiBlender className="skill-icon" />
              <p>Blender 3D</p>
            </li>
            <li>
              <MdOndemandVideo className="skill-icon" />
              <p>DaVinci Resolve</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
