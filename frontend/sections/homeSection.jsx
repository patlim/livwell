import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: calc(100% - 64px);
  max-width: 1000px;
`

const SubHeadingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 960px;
  margin: 24px auto;
  h2 {
    font-family: var(--font-montserrat);
    font-weight: normal;
    font-size: 40px;
    &:nth-child(2) {
      text-align: center;
    }
    &:last-child {
      text-align: end;
    }
  }
`

const SunContainer = styled.div`
  position: relative;
  height: 60vh;
  width: 60vh;
  margin: auto;
  z-index: -1;
`;

const SunRays = styled.img.attrs(props => ({
  style: {
    transform: `rotate(${props.rotation}deg)`,
  },
}))`
  height: 100%;
  width: auto;
  object-fit: contain;
  transition: transform 0.1s ease-out;
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


const Home = () => {
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
      <Logo src="/images/logo.svg" alt="logo" />
      <SubHeadingContainer>
        <h2>Reiki</h2>
        <h2>Mindfulness</h2>
        <h2>Massage</h2>
      </SubHeadingContainer>
    </Section>
  );
};

export default Home;
