function Projects() {
  return (
    <section id="projects" className="projects-wrapper">
      <div className="projects-list">
        <div className="project-card">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
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
            <div className="project-link-wrapper">
              <a>website</a>
              <a>code</a>
              <a>more info</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
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
            <div className="project-link-wrapper">
              <a>website</a>
              <a>code</a>
              <a>more info</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <div className="project-text-wrapper">
            <h3>HRS</h3>
            <h4>Front-End, Audio Manipulation</h4>
            <p className="project-stack">
              <strong>Stack: </strong>
              <em>ReactJS, Vite, Node.JS, wavesurfer.js, File API</em>
            </p>
            <hr className="seperator"></hr>
            <span className="project-description">
              Transform the speed of an uploaded audio file. HRS also works as a
              standalone audio player with an interactive waveform scrubber.
            </span>
            <div className="project-link-wrapper">
              <a>demo</a>
              <a>code</a>
              <a>more info</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
