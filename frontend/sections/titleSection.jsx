import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  text-align: center;
  margin-top: -86px;
`;

const SunContainer = styled.div`
  position: relative;
  height: 70vh;
  width: 70vh;
  margin: auto;
`;

// Using attrs method to handle dynamic styles
const SunRays = styled.img.attrs(props => ({
  style: {
    transform: `rotate(${props.rotation}deg)`,
  },
}))`
  height: 100%;
  width: auto;
  object-fit: contain;
  transition: transform 0.1s ease-out; /* Smooth transition */
`;

const SunFace = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 33%;
  height: auto;
  object-fit: contain;
`;

// Static bees without parallax effect
const BeeOne = styled.img`
  width: 50px;
  position: absolute;
  top: 10%;
  left: 80%;
  pointer-events: none;
  transform: scaleX(-1);
`;

const BeeTwo = styled.img`
  width: 70px;
  position: absolute;
  top: 40%;
  left: 25%;
  pointer-events: none;
`;

const Title = ({ heading }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newRotation = scrollY * 0.025;
      setRotation(newRotation);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section>
      <SunContainer>
        <SunRays src="/images/sun-rays.png" alt="rays" rotation={rotation} />
        <SunFace src="/images/sun-face.png" alt="face" />
      </SunContainer>
      <Heading>{heading}</Heading>
      <BeeOne src="/images/bee.png" alt="bee" />
      <BeeTwo src="/images/bee.png" alt="bee" />
    </Section>
  );
};

export default Title;
