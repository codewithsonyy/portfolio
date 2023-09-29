import React, { Suspense } from "react";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col, Button } from "reactstrap";
import { BsFillFilePdfFill} from "react-icons/bs";
import Image from "next/image";
import heroImg from "../../public/images/sonimg.png";
import classes from "../../styles/hero.module.css";
import classNames from "../../styles/subtitle.module.css";

const Hero = () => {
  return (
    <section className={` ${classes.hero} `}>
      {/* desktop / large screen view */}
      <Container id="hero-section " className="md:flex hidden">
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Soni Kumari</h2>
              <h5 className="mb-4">Fullstack Developer & Learner</h5>
              <p id="about-me">
                Hi there! My name is Soni Kumari and I&rsquo;m a web developer
                with over 2 years of experience as i started my coding journey in 2021 and I am still learning and exploring this field. I love
                all things tech and coding, and on LinkedIn, I share my
                knowledge and experience with others through posts.
              </p>
            </div>
            <div className="mt-5 flex place-content-center md:block">
              <div className="relative inline-flex group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-pulse hover:animate-none from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1go_4JiLlzvRA5SBj7WYl36qOAX1hNfK_/view?usp=sharing"
                  className="relative text-sm sm:text-md md:text-lg text-center items-center justify-center px-8 py-4  font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    className="block"
                  >
                    Download Resume <BsFillFilePdfFill />
                  </span>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="Soni Kumari" src={heroImg} width="450" height="450" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* mobile / small screen view */}

      <Container id="hero-section" className="md:hidden">
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <div className="flex flex-col items-center justify-center">
                <Col lg="6" md="6">
                  <div className={`${classes.hero__img} text-end`}>
                    <Image
                      alt="Soni Kumari"
                      src={heroImg}
                      width="450"
                      height="450"
                    />
                  </div>
                </Col>
                <h2 className="mt-3 mb-3">
                  <span className={`${classNames.section__subtitle}`}>
                    Hello !{" "}
                  </span>
                  I&apos;m Soni Kumari
                </h2>
                <h5 className="mb-4">Fullstack Developer & Learner</h5>
                <p id="about-me" className="text-center">
                Hi there! My name is Soni Kumari and I&rsquo;m a web developer
                with over 2 years of experience as i started my coding journey in 2021 and I am still learning and exploring this field. I love
                all things tech and coding, and on LinkedIn, I share my
                knowledge and experience with others through posts.
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-col items-center justify-center">
              <div className="relative inline-flex group">
                <div className="absolute w-full transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-pulse hover:animate-none from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1go_4JiLlzvRA5SBj7WYl36qOAX1hNfK_/view?usp=sharing"
                  className="relative w-full text-sm sm:text-md md:text-lg text-center items-center justify-center px-8 py-4  font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    className="block"
                  >
                    Download Resume <BsFillFilePdfFill />
                  </span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
