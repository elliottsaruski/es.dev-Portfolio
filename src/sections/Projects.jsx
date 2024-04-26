import { MdArrowDropDown } from "react-icons/md";

import SONprojectImg from "../assets/FEED.png";
import maxFryImg from "../assets/HOME.png";
import HRSprojectImg from "../assets/HRS.png";

function Projects() {
  return (
    <section id="projects" className="projects-wrapper">
      <div className="projects-list">
        <div className="project-card">
          <img src={SONprojectImg} />
          <div className="project-text-wrapper">
            <h3>Symptoms of Nature: Creative Collective</h3>{" "}
            <h4>Web-Design, Front-End, Audio Player</h4>
            <p className="project-stack">
              <strong>Stack: </strong>
              <em>ReactJS, Node.JS...</em>
            </p>
            <hr className="seperator"></hr>
            <span className="project-description">
              Web Design, branding and custom web audio player created for Miami
              based Creative Collective Project, <em>Symptoms of Nature</em>.
              The interactive audio and media players can be used to listen/view
              while browsing the site.
            </span>
            <div className="more-info-wrapper">
              <button>
                <MdArrowDropDown />
                More Info
              </button>
            </div>
            {/* <div className="project-link-wrapper">
              <a>website</a>
              <a>code</a>
            </div> */}
          </div>
        </div>
        <div className="project-card">
          <img src={maxFryImg} />
          <div className="project-text-wrapper">
            <h3>Max Fry</h3>
            <h4>Web-Design, Front-End</h4>
            <p className="project-stack">
              <strong>Stack: </strong>
              <em>ReactJS, Node.JS...</em>
            </p>
            <hr className="seperator"></hr>
            <span className="project-description">
              Website made for popular shoegaze artist, Max Fry. The website
              gathers the artists{"'"} live show dates from bandsintown /
              songkick / ticketmaster API.
            </span>
            <div className="more-info-wrapper">
              <button>
                <MdArrowDropDown />
                More Info
              </button>
            </div>
            {/* <div className="project-link-wrapper">
              <a>website</a>
              <a>code</a>
            </div> */}
          </div>
        </div>
        <div className="project-card">
          <img src={HRSprojectImg} />
          <div className="project-text-wrapper">
            <h3>HRS</h3>
            <h4>Front-End, SPA, Audio Manipulation</h4>
            <p className="project-stack">
              <strong>Stack: </strong>
              <em>ReactJS, Vite, Node.JS, wavesurfer.js, File API</em>
            </p>
            <hr className="seperator"></hr>
            <span className="project-description">
              Transform the speed of an uploaded audio file. HRS also works as a
              standalone audio player with an interactive waveform scrubber.
            </span>
            <div className="more-info-wrapper">
              <button>
                <MdArrowDropDown />
                More Info
              </button>
            </div>
            <div className="project-link-wrapper">
              <a>demo</a>
              <a href="https://github.com/elliottsaruski/HRS-app">code</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

// The next step to creating a good front-end portfolio design is to showcase your process and results for each project. You should provide a clear and concise description of the project, its purpose, its features, and its challenges. You should also explain how you approached the project, what tools and technologies you used, and what problems you solved. You should also include screenshots, mockups, or live demos of your projects, as well as links to the source code or the live website. Highlight the results and outcomes of your projects, such as feedback, metrics, or awards.

// 1️⃣ Outline each project's purpose, features, and challenges, along with your tech stack.

// 2️⃣ Include visuals like screenshots or live demos, with links to source code or live sites.

// 3️⃣ Highlight project outcomes such as feedback or awards for a clear and concise showcase of your work.
