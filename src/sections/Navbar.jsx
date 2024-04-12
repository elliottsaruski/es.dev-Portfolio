import Contact from "./Contact";

function NavBar() {
  return (
    <header id="NAV-wrapper">
      <div className="name-title-wrapper">
        <h1>Elliott Saruski</h1>
        <span>Front-End Engineer. Marketer. Creator.</span>
      </div>
      <nav>
        <li>About Me</li>
        <li>Projects</li>
        <li>Creative</li>
      </nav>
      <ResumeCV />
      <Contact />
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
