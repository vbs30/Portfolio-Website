import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Project images imports
import projImg1 from "../assets/img/Vidverse-proj1.png";
import projImg11 from "../assets/img/bloghub-proj2.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.jpg";
import projImg10 from "../assets/img/project-img10.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {
  const projects = [
    {
      title: "VidVerse - The Universe of Videos",
      description: "Next.js, Node.js with Express.js, MongoDB, JWT Authentication, GZIP Compression",
      imgUrl: projImg1,
      link: "https://github.com/vbs30/VidVerse-Universe-of-Videos"
    },
    {
      title: "BlogHub 📝 - Modern Blogging Platform",
      description: "React js, Appwrite",
      imgUrl: projImg11,
      link: "https://github.com/vbs30/BlogHub---Modern-Blogging-Platform"
    },
    {
      title: "Shopify",
      description: "Python, Django",
      imgUrl: projImg4,
      link: "https://github.com/vbs30/Shopify"
    },
    {
      title: "PC Powerhouse - The One Shop for Computer Parts",
      description: "React js, Node js, MongoDB, Express js",
      imgUrl: projImg5,
      link: "https://github.com/vbs30/PC-Powerhouse---Ecommerce"
    },
    {
      title: "Disease Prediction using Hybrid Imputation Approach",
      description: "Machine Learning algorithms, Python",
      imgUrl: projImg3,
      link: "https://github.com/disease-prediction"
    },
    {
      title: "Basket Trends: Understanding Consumer's Choice",
      description: "Apriori Algorithm, Machine Learning, Python",
      imgUrl: projImg6,
      link: "https://github.com/basket-trends"
    },
    {
      title: "Mock-up Responsive Page",
      description: "Html, CSS, Bootstrap-3",
      imgUrl: projImg2,
      link: "https://github.com/mockup-page"
    },
    {
      title: "Smart Container",
      description: "IOT, C++",
      imgUrl: projImg7,
      link: "https://github.com/smart-container"
    },
    {
      title: "Fresh from the Farm",
      description: "HTML, CSS, Javascript, Express js, MongoDB",
      imgUrl: projImg8,
      link: "https://github.com/fresh-farm"
    },
    {
      title: "Health Insurance Management System",
      description: "Python, Flask, MySQL",
      imgUrl: projImg9,
      link: "https://github.com/health-insurance"
    },
    {
      title: "Smart City Management System",
      description: "Java, Java Swing, MySQL",
      imgUrl: projImg10,
      link: "https://github.com/smart-city"
    },
  ];

  // Initial number of projects to show
  const [visibleProjects, setVisibleProjects] = useState(4);

  // Function to handle "Load More" button click
  const handleLoadMore = () => {
    setVisibleProjects(prevVisible =>
      prevVisible + 4 > projects.length ? projects.length : prevVisible + 4
    );
  };

  // Function to handle "Show Less" button click
  const handleShowLess = () => {
    setVisibleProjects(4);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row className="justify-content-center">
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>Throughout my engineering journey and professional experiences,
                  I have successfully implemented and executed a variety of projects,
                  demonstrating my technical skills and problem-solving abilities.
                  All of these projects are available at my GitHub page.</p>
              </div>
            )}
          </TrackVisibility>
        </Row>

        <div className="projects-horizontal">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-4">
          {visibleProjects < projects.length ? (
            <Button
              variant="outline-light"
              onClick={handleLoadMore}
              className="load-more-btn"
            >
              Load More
            </Button>
          ) : (
            <Button
              variant="outline-light"
              onClick={handleShowLess}
              className="show-less-btn"
            >
              Show Less
            </Button>
          )}
        </div>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};

const ProjectItem = ({ title, description, imgUrl, link }) => {
  return (
    <div className="project-item">
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        <div className="project-content">
          <div className="project-img-container">
            <img src={imgUrl} alt={title} className="project-img" />
          </div>
          <div className="project-details">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};