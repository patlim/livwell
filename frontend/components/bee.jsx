import React, { useEffect, useState } from "react";
import debounce from "../utils/debounce";
import styled from "styled-components";
import { useRouter } from 'next/router';

const BeeImage = styled.img`
  position: absolute;
  width: 25px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  transform: translateY(${(props) => props.scrollY * 0.3}px);
`;

const Bee = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [beeImage, setBeeImage] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const router = useRouter();

  const beeImages = [
    '/images/bee.svg',
    '/images/bee2.svg',
    '/images/bee3.svg',
    '/images/bee4.svg',
  ];

  const getRandomPosition = () => {
    const randomTop = Math.floor(Math.random() * document.body.scrollHeight);
    const randomLeft = Math.floor(Math.random() * window.innerWidth);
    setPosition({ top: randomTop, left: randomLeft });
  };

  const getRandomBeeImage = () => {
    const randomIndex = Math.floor(Math.random() * beeImages.length);
    setBeeImage(beeImages[randomIndex]);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleResize = debounce(() => {
    if (window.innerWidth !== windowWidth || window.innerHeight !== windowHeight) {
      getRandomPosition();
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }
  }, 500);

  useEffect(() => {
    getRandomPosition();
    getRandomBeeImage();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    const handleRouteChange = () => {
      getRandomPosition();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', (evt) => handleResize(evt));
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <BeeImage
      src={beeImage}
      alt="bee"
      top={position.top - scrollY * 0.5}
      left={position.left}
      scrollY={scrollY}
    />
  );
};

export default Bee;
