import React from "react";
import Twt from "../resources/images/Twitter X.png";
import Gh from "../resources/images/GithubLogo.png";
import ll from "../resources/images/linkedin.png";
import disc from "../resources/images/discord.png"
import inst from "../resources/images/instagram.png"

const ContactMe = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2>Contact Me</h2>
            <p>
              Have a question or want to work together? Feel free to reach out to me!
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 text-center">
            <div className="contact-info">
              <h3>E-mail</h3>
              <p>aliyanulhaq309@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="contact-info">
              <h3>Socials</h3>
              <p>
                <a href="https://github.com/Yan309"><img src={Gh} alt="GitHub" /></a>
                <a href="https://www.linkedin.com/in/muhammad-aliyan-ul-haq-75130b27b"><img src={ll} alt="LinkedIn" /></a>
                <a href="https://twitter.com/DemonSkg"><img src={Twt} alt="Twitter" /></a>
                <a href="https://www.instagram.com/aliyan_uhh"><img src={disc} alt="Discord" /></a>
                <a href=""><img src={inst} alt="Instagram" /></a>
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="contact-info">
              <h3>Location</h3>
              <p>Lahore, Pakistan</p>
              <h3>Contact No.</h3>
              <p>+92-3338485806</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
