import React from "react";
import "./work.css";
import sae from "../../assets/sae.png";
import swift from "../../assets/swift.png"
import homeland from "../../assets/homeland.png"
import gpt from "../../assets/gpt.png";
import kafiil from "../../assets/kafiil.png"
import street from "../../assets/street.png"
import cup from "../../assets/cup.png";
import host from "../../assets/host.png";
import kicks from "../../assets/kicks.png";
import leon from "../../assets/leon.png";
import xo from "../../assets/xo.png";
import drums from "../../assets/drums.png";
const Work = () => {
  const projects = [
    {
      image: sae,
      headline: "SAE-GRAD",
      info: "A website for School Of Architecture in Egypt, It's basically an organization which provides courses for architerctures inside and outside Egypt. Using React.",
      link: "https://sae-grad.com/",
    },
    {
      image: swift,
      headline: "SwiftCart",
      info: "An innovative e-commerce website designed and developed entirely by me using React.js, Redux, React Router Dom, React Loading Skeleton and React Icons.",
      link: "https://mahmoudellabban.github.io/SwiftCart/",
    },
    {
      image: homeland,
      headline: "HomeLand",
      info: "A website for real estate agency called HomeLand, using React and Tailwind.",
      link: "https://mahmoudellabban.github.io/Home-Land/",
    },
    {
      image: gpt,
      headline: "GPT-3",
      info: "Informative website about GPT-3, the most powerful text generator in the world. Because of its ability to generate accurate, fluent, and solid output. Using React.",
      link: "https://mahmoudellabban.github.io/gpt3/",
    },
    {
      image: kicks,
      headline: "Kicks",
      info: "E-commerce website for sport sneakers, using HTML, CSS and JavaScript",
      link: "https://mahmoudellabban.github.io/Kicks/",
    },
    {
      image: kafiil,
      headline: "Kafiil",
      info: "Kafiil works to provide a professional and safe environment for interaction between entrepreneurs and freelancers, using HTMl, CSS and JavaScript",
      link: "https://mahmoudellabban.github.io/kafiil/",
    },
    {
      image: street,
      headline: "Street Suite",
      info: "Our goal is to empower you with valuable information that can guide your investment decisions intelligently, using React",
      link: "https://mahmoudellabban.github.io/street-suite/"
    },
    {
      image: cup,
      headline: "The WholeSome Cup",
      info: "A website for a coffee shop, designed and developed by me, using React",
      link: "https://mahmoudellabban.github.io/TheWholeSomeCup/",
    },
    {
      image: host,
      headline: "Host It",
      info: "Using HTML, CSS and JavaScript",
      link: "https://mahmoudellabban.github.io/Host-It/",
    },
    {
      image: leon,
      headline: "Leon",
      info: "Using HTML and CSS.",
      link: "https://mahmoudellabban.github.io/LEON/",
    },
    {
      image: drums,
      headline: "Drum Kit Simulation",
      info: "Using HTML, CSS and JavaScript",
      link: "https://mahmoudellabban.github.io/Drum-Kit/",
    },
    {
      image: xo,
      headline: "Tic-Tac-Toe",
      info: "Using HTML, CSS and JavaScript",
      link: "https://mahmoudellabban.github.io/Tic-Tac-Toe/",
    },
  ];
  return (
    <section id="work" className="portfolio">
      <div className="container">
        <div className="intro">
          <h2>Portfolio</h2>
          <p>
            I proudly present a collection of my work. These projects reflect my
            passion for creating visually stunning and highly functional
            websites. From responsive designs to interactive user interfaces,
            each project showcases my dedication for delivering exceptional user
            experiences.
          </p>
        </div>
        <div id="projects">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <img src={project.image} alt={project.headline} loading="lazy" />
              <h3>{project.headline}</h3>
              <p>{project.info}</p>
              <button id="bottone5">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Live
              </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
