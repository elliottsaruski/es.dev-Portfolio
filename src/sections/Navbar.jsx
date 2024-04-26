import ColorMode from "../components/ColorMode";
import Contact from "./Contact";

function NavBar() {
  return (
    <header id="nav-wrapper">
        <div className="name-title-wrapper">
          <h1>Elliott Saruski</h1>
          <h4>Front-End Engineer</h4>
        </div>
      <nav>
        <li>About Me</li>
        <li>Projects</li>
        <li>Creative</li>
      </nav>
      <ResumeCV />
      <Contact />
      <ColorMode />
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
