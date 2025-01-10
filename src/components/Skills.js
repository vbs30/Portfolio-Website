import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaJava, FaPython, FaReact, FaNodeJs, FaDocker, FaAws, FaWordpress, FaGitAlt, FaGithub, FaJenkins, FaHtml5, FaCss3Alt, FaJs, FaBrain, FaLinux, FaGitlab } from 'react-icons/fa';
import { DiMongodb, DiMsqlServer, DiMysql } from 'react-icons/di';
import { SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiGnubash, SiDjango, SiKubernetes, SiExpress } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { AiOutlineDotNet } from "react-icons/ai";

const SkillCategory = ({ title, skills }) => (
  <div className="mb-5">
    <h3 className="category-title mb-4">{title}</h3>
    <Row>
      {skills.map((skill, index) => (
        <Col key={index} xs={4} sm={3} md={2} lg={2} className="mb-3">
          <Card className="skills-card shadow-lg">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="skill-icon mb-3">{skill.icon}</div>
              <Card.Title className="skills-card-title">{skill.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export const Skills = () => {
  const skillCategories = {
    languages: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'C-sharp', icon: <TbBrandCSharp /> }
    ],
    webDevelopment: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: '.NET', icon: <AiOutlineDotNet /> },
      { name: 'WordPress', icon: <FaWordpress /> },
    ],
    database: [
      { name: 'MongoDB', icon: <DiMongodb /> },
      { name: 'SQL Server', icon: <DiMsqlServer /> },
      { name: 'MySQL', icon: <DiMysql /> },
    ],
    devOps: [
      { name: 'Linux', icon: <FaLinux /> },
      { name: 'Bash Scripting', icon: <SiGnubash /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Jenkins', icon: <FaJenkins /> },
      { name: 'GitLab', icon: <FaGitlab /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'AWS', icon: <FaAws /> },
    ],
    machineLearning: [
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Deep Learning', icon: <FaBrain /> }
    ]
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <h2 className="text-center mb-5">Skills</h2>
        <SkillCategory title="Programming Languages" skills={skillCategories.languages} />
        <SkillCategory title="Databases" skills={skillCategories.database} />
        <SkillCategory title="Web Development" skills={skillCategories.webDevelopment} />
        <SkillCategory title="DevOps" skills={skillCategories.devOps} />
        <SkillCategory title="Machine Learning" skills={skillCategories.machineLearning} />
      </Container>
    </section>
  );
};

export default Skills;