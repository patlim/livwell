import { useEffect, useState } from 'react';
import styled from "styled-components";

const SunContainer = styled.div`
  position: relative;
  height: 60vh;
  width: 60vh;
  max-width: 100%;
  margin: auto;
  z-index: -1;
`;

const SunRays = styled.img.attrs(props => ({
  style: {
    transform: `rotate(${props.$rotation}deg)`,
  },
}))`
  height: 100%;
  width: 100%;
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

const Sun = () => {
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
    <SunContainer>
      <SunRays src="/images/sun-rays.png" alt="rays" $rotation={rotation} />
      <SunFace src="/images/sun-face.png" alt="face" />
    </SunContainer>
  );
}
 
export default Sun;