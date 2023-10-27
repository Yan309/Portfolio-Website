import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../resources/images/logo1.png";
import Twt from "../resources/images/Twitter X.png";
import Gh from "../resources/images/GithubLogo.png";
import ll from "../resources/images/linkedin.png";

export const NavBar = () => {
  const [activeLink, setactiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (val) => {
    setactiveLink(val);

    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="space"></div>
            <div className="social-icon">
              <a href="https://github.com/Yan309">
                <img src={Gh} alt="" />
              </a>
              <a href="https:/www.linkedin.com/in/muhammad-aliyan-ul-haq-75130b27b">
                <img src={ll} alt="" />
              </a>
              <a href="https://twitter.com/DemonSkg">
                <img src={Twt} alt="" />
              </a>
            </div>
            <button
              href="#connect"
              className="connectButton"
              data-text="Let's Connect"
              onClick={() => onUpdateActiveLink("connect")}
            >
              <span className="actual-text">&nbsp;Let'sConnect&nbsp;</span>
              <span aria-hidden="true" className="hover-text">
                &nbsp;Let'sConnect&nbsp;
              </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
