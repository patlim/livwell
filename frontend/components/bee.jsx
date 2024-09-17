import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import debounce from '../utils/debounce';
import { useRouter } from 'next/router';

const BeeImage = styled.img.attrs((props) => ({
  style: {
    top: `${props.$top}px`,
    left: `${props.$left}px`,
    transform: `translateY(${props.$scrollY * 0.3}px)`,
  },
}))`
  position: absolute;
  width: 25px;
`;

const Bee = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [beeImage, setBeeImage] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  const beeImages = [
    '/images/bee.svg',
    '/images/bee2.svg',
    '/images/bee3.svg',
    '/images/bee4.svg',
  ];

  const getRandomPosition = () => {
    const pageHeight = document.documentElement.scrollHeight;
    const pageWidth = window.innerWidth;

    const randomTop = Math.floor(Math.random() * pageHeight);
    const randomLeft = Math.floor(Math.random() * pageWidth);
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
    getRandomPosition();
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
      window.removeEventListener('resize', handleResize);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <BeeImage
      src={beeImage}
      alt="bee"
      $top={position.top - scrollY * 0.5}
      $left={position.left}
      $scrollY={scrollY}
    />
  );
};

export default Bee;
