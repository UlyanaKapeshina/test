import "./About.scss";
import photoUrl from "./JasonWood.jpg";
import ScrollLink from "../scroll-link/ScrollLink";
import Menu from "../menu/Menu";

function About() {

  return (
    <section className="about">  
      <Menu />    
      <div className="about_inner">
        <div className="about_photo">
          <img src={photoUrl} alt="Me" className="about_image" />
        </div>
        <div className="about_description">
          <h2 className="about_title">About me</h2>
          <p className="about_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="about_text about_text--last">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="about_name">Jason Wood</p>
        </div>
      </div> 
      <ScrollLink />   
    </section>
  );
}

export default About;
