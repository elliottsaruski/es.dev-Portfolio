import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { RiGithubLine } from "react-icons/ri";

function Contact() {
  return <Links />;
}

const Links = () => {
  return (
    <section className="contact-links-wrapper">
      <div className="social-item">
        <button href="https://www.linkedin.com/in/elliottsaruski/">
          <CiTwitter className="icon" />
        </button>
        <h5>Twitter</h5>
      </div>
      <div className="social-item">
        <button href="https://github.com/elliottsaruski">
          <RiGithubLine className="icon" />
        </button>
        <h5>Github</h5>
      </div>
      <div className="social-item">
        <button href="https://twitter.com/_envimusic">
          <CiLinkedin className="icon" />
        </button>
        <h5>LinkedIn</h5>
      </div>
    </section>
  );
};

export default Contact;
