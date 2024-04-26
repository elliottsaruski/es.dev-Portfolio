import ColorMode from "../components/ColorMode";
import Contact from "./Contact";

function NavBar() {
  return (
    <header id="nav-wrapper">
      <div className="name-title-wrapper">
        <h1>Elliott Saruski</h1>
        <h4>Front-End Engineer</h4>
      </div>
      <hr />
      <nav>
        <ul>
          <li>Home</li>
          <ul className="inner-nav">
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <li>Creative</li>
        </ul>
      </nav>
      <ResumeCV />
      <div className="nav-bottom-wrapper">
        <ColorMode />
        <div className="nav-bottom-wrapper-inner">
          <Contact />
        </div>
      </div>
    </header>
  );
}

function ResumeCV() {
  return (
    <div className="resume-cv-wrapper">
      <button>Resume</button>
      <button>CV</button>
    </div>
  );
}

export default NavBar;
