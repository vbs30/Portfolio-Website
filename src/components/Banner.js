import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer", "DevOps Enthusiast", ".NET Developer", "Machine Learning Enthusiast"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h2>{`Hi! I'm Vinayak Suryavanshi`}</h2>
                  <h3><span className="txt-rotate" dataPeriod="1000" data-rotate='[Full Stack Developer, DevOps Enthusiast, .NET Developer, Machine Learning Enthusiast]'><span className="wrap">{text}</span></span></h3>
                  <p>
                    Skilled in Data Structures and Algorithms with Java, Full Stack Web Development (ReactJS, NodeJS, MySQL, MongoDB), Machine Learning with Python, and Docker.
                    I am passionate about exploring and working in Machine Learning, DevOps, and Web Development.
                    Besides my technical pursuits, I enjoy playing Cricket and Chess.

                  </p>
                </div>}
            </TrackVisibility>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/vinayak-suryavanshi/"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/vbs30"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/vbs_30/"><img src={navIcon3} alt="" /></a>
              <a href="https://leetcode.com/u/VBS_30/"><img src={navIcon4} alt="" /></a>
              <a href="https://drive.google.com/file/d/1JUoYh6AFQz1sduU-DRrtPc_FUhbyL2uM/view"><img src={navIcon5} alt="" /></a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5} className="center-img">
            <img src={headerImg} alt="Header Img" class="banner-img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}