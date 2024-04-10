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
      <div className="resume-cv-wrapper">
        <button>Resume</button>
        <button>CV</button>
      </div>
      <Contact />
    </header>
  );
}

export default NavBar;
