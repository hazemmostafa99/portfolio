import React, { useState, useEffect } from "react";
import "./Work.scss";
const data = [
  {
    id: "1",
    icon: "./assets/mobile.png",
    title: "Web Design",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
  },
  {
    id: "2",
    icon: "./assets/globe.png",
    title: "Mobile Application",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
  },
  {
    id: "3",
    icon: "./assets/writing.png",
    title: "Branding",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
  },
];
const Work = () => {
  const [projects, setProjects] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index > projects.length - 1) {
      setIndex(0);
    } else if (index < 0) {
      setIndex(projects.length - 1);
    }
  }, [index, projects]);

  return (
    <div id="work" className="work">
      <div className="slider">
        {projects.map((project, idx) => {
          let position = "nextSlider";
          if (
            idx === index - 1 ||
            (index === 0 && idx === projects.length - 1)
          ) {
            position = "lastSlider";
          }
          if (idx === index) {
            position = "activeSlider";
          }
          return (
            <div key={project.id} className={"container " + position}>
              <div className="item">
                <div className="left">
                  <img src={project.icon} alt="icon" />
                  <h3>{project.title} </h3>
                  <p>{project.desc}</p>
                  <a href="#home">Project</a>
                </div>
                <div className="right">
                  <img src={project.img} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <img
        onClick={() => setIndex(index - 1)}
        src="assets/arrow.png"
        alt="slider"
        className="arrow left"
      />
      <img
        onClick={() => setIndex(index + 1)}
        src="assets/arrow.png"
        alt="slider"
        className="arrow right"
      />
    </div>
  );
};

export default Work;
