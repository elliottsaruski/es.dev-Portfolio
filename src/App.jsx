import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import "./App.css";

function App() {
  return (
    <div id="full-wrapper">
      <Navbar />
      {/* <hr /> */}
      <div id="feed">
        <Home />
        <h2>About Me</h2>
        {/* <hr className="divider"></hr> */}
        <About />
        <h2>Projects</h2>
        {/* <hr className="divider"></hr> */}
        <Projects />
        <h2>Let{"'"}s Connect!</h2>
        {/* <hr className="divider"></hr> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
