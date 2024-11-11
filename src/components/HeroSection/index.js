import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  SocialMediaIcons,
  SocialMediaIcon,
  ResumeButton,
} from "./HeroStyle";
import HeroImg from "../../images/HeroImage.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            {/* Social Media Icons */}
            <SocialMediaIcons>
              <SocialMediaIcon href="https://facebook.com" target="_blank">
                <FaFacebook />
              </SocialMediaIcon>
              <SocialMediaIcon href="https://twitter.com" target="_blank">
                <FaTwitter />
              </SocialMediaIcon>
              <SocialMediaIcon
                href="https://www.linkedin.com/in/deepak-choudhary-53200625b"
                target="_blank"
              >
                <FaLinkedin />
              </SocialMediaIcon>
              <SocialMediaIcon
                href="https://www.instagram.com/deepakchoudhary434/"
                target="_blank"
              >
                <FaInstagram />
              </SocialMediaIcon>
              <SocialMediaIcon
                href="https://medium.com/@scifigen20032021"
                target="_blank"
              >
                <FaMedium />
              </SocialMediaIcon>
            </SocialMediaIcons>
            {/* Resume Button */}
            <ResumeButton href={Bio.resume} target="_display">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
