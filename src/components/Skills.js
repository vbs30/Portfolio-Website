import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaJava, FaDatabase, FaPython, FaReact, FaNodeJs, FaDocker, FaAws, FaWordpress, FaGitAlt, FaGithub, FaJenkins } from 'react-icons/fa';


export const Skills = () => {
  const skills = [
    { name: 'Java', icon: <FaJava /> },
    { name: 'MySQL', icon: <FaDatabase /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'SQL Server', icon: <FaDatabase /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'Express.js', icon: <FaNodeJs /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'MongoDB', icon: <FaDatabase /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Jenkins', icon: <FaJenkins /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'WordPress', icon: <FaWordpress /> }
  ];

  return (
    <section class="skills" id="skills">
      <Container className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <Card className="skills-card shadow-lg">
                <Card.Body className="d-flex flex-column align-items-center">
                  <div className="skill-icon mb-3">{skill.icon}</div>
                  <Card.Title className="skills-card-title">{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

