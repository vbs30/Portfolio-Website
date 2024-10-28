import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
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
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "To-Do-List Deployment",
      description: "AWS, Jenkins, Docker, Github, Html, CSS, Javascript",
      imgUrl: projImg1,
      link: "https://github.com/example/todolist-deployment"
    },
    {
      title: "Mock-up Responsive Page",
      description: "Html, CSS, Bootstrap-3",
      imgUrl: projImg2,
      link: "https://github.com/example/mockup-page"
    },
    {
      title: "Disease Prediction using Hybrid Imputation Approach",
      description: "Machine Learning algorithms, Python",
      imgUrl: projImg3,
      link: "https://github.com/example/disease-prediction"
    },
    {
      title: "Shopify",
      description: "Python, Django",
      imgUrl: projImg4,
      link: "https://github.com/example/shopify"
    },
    {
      title: "PC Powerhouse - The One Shop for Computer Parts",
      description: "React js, Node js, MongoDB, Express js",
      imgUrl: projImg5,
      link: "https://github.com/example/pc-powerhouse"
    },
    {
      title: "Basket Trends: Understanding Consumer's Choice",
      description: "Apriori Algorithm, Machine Learning, Python",
      imgUrl: projImg6,
      link: "https://github.com/example/basket-trends"
    },
    {
      title: "Smart Container",
      description: "IOT, C++",
      imgUrl: projImg7,
      link: "https://github.com/example/smart-container"
    },
    {
      title: "Fresh from the Farm",
      description: "HTML, CSS, Javascript, Express js, MongoDB",
      imgUrl: projImg8,
      link: "https://github.com/example/fresh-farm"
    },
    {
      title: "Health Insurance Management System",
      description: "Python, Flask, MySQL",
      imgUrl: projImg9,
      link: "https://github.com/example/health-insurance"
    },
    {
      title: "Smart City Management System",
      description: "Java, Java Swing, MySQL",
      imgUrl: projImg10,
      link: "https://github.com/example/smart-city"
    },
  ];

  // Slice projects array into groups of six
  const firstTabProjects = projects.slice(0, 6);
  const secondTabProjects = projects.slice(6, 12);
  const thirdTabProjects = projects.slice(12, 18); // Adjust this if more projects are added later

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Throughout my engineering journey and professional experiences,
                    I have successfully implemented and executed a variety of projects,
                    demonstrating my technical skills and problem-solving abilities.
                    All of these projects are available at my GitHub page.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {firstTabProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {secondTabProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {thirdTabProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project} />
                            );
                          })}
                        </Row>

                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
