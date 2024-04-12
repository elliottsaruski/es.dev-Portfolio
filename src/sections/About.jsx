import headshot from "../assets/es-headshot.jpg";
import { SiCodecademy } from "react-icons/si";
import { PiGraduationCap } from "react-icons/pi";
import { MdOutlinePhotoCameraFront } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiReact } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { MdAudiotrack } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { SiLighthouse } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobecreativecloud } from "react-icons/si";
import { SiAbletonlive } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { MdOndemandVideo } from "react-icons/md";

function About() {
  return (
    <section className="about-wrapper">
      <div className="headshot-wrapper">
        <img src={headshot} id="headshot-img" />
        <MdOutlinePhotoCameraFront id="headshot-icon" />
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
        <br></br>
        <br></br>Ideally, I would like to incorporate my deep passion for music
        technology with the development of interactive digital experiences, from
        DAWS, VSTs, and Web Audio Applications to musician / producer focused
        products or services.
      </span>
      <hr className="divider-2"></hr>
      <div className="education-wrapper">
        <h3>Education</h3>
        <div className="education">
          <div className="education-item" id="coding">
            <div className="education-icon-wrapper">
              <SiCodecademy className="icon" />
            </div>
            <hr></hr>
            <div className="education-info-wrapper">
              <p className="education-time-frame">2022-23</p>
              <h5 className="education-type">Front-End Engineer Career Path</h5>
              <p>Codecademy.com</p>
            </div>
          </div>
          <div className="education-item" id="marketing">
            <div className="education-icon-wrapper">
              <PiGraduationCap className="icon" />
            </div>
            <hr></hr>
            <div className="education-info-wrapper">
              <p className="education-time-frame">2016-20</p>
              <h5 className="education-type">B.S. Marketing</h5>
              <p>Florida State University</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="divider-2"></hr>

      <div className="skills-wrapper">
        <div className="skill">
          <h3>Skills</h3>
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
          <h5>Frameworks / Libraries</h5>
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
            <li>
              <SiRedux className="skill-icon" />
              <p>Redux</p>
            </li>
            <li>
              <SiTailwindcss className="skill-icon" />
              <p>Tailwind CSS</p>
            </li>
            <li>
              <TbBrandFramerMotion className="skill-icon" />
              <p>Framer Motion</p>
            </li>
            <li>
              <MdAudiotrack className="skill-icon" />
              <p>Tone.js</p>
            </li>
            <li>
              <TbApi className="skill-icon" />
              <p>Web Audio API</p>
            </li>
          </ul>
        </div>
        <div className="skill">
          <h5>Tools / Software</h5>
          <ul className="skills-list">
            <li>
              <FaGithub className="skill-icon" />
              <p>Git</p>
            </li>
            <li>
              <BiLogoNetlify className="skill-icon" />
              <p>Netlify</p>
            </li>
            <li>
              <SiLighthouse className="skill-icon" />
              <p>Lighthouse</p>
            </li>
            <li>
              <IoLogoFigma className="skill-icon" />
              <p>Figma</p>
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
