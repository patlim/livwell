import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const Bee = ({ containerSize }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [beeImage, setBeeImage] = useState('');
  const [scrollY, setScrollY] = useState(0);

  const beeImages = [
    '/images/bee.svg',
    '/images/bee2.svg',
    '/images/bee3.svg',
    '/images/bee4.svg',
  ];

  const getRandomPosition = () => {
    if (!containerSize || containerSize.width === 0 || containerSize.height === 0) return;
    const randomTop = Math.floor(Math.random() * containerSize.height);
    const randomLeft = Math.floor(Math.random() * containerSize.width);
    setPosition({ top: randomTop, left: randomLeft });
  };

  const getRandomBeeImage = () => {
    const randomIndex = Math.floor(Math.random() * beeImages.length);
    setBeeImage(beeImages[randomIndex]);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    getRandomPosition();
    getRandomBeeImage();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [containerSize]);

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
