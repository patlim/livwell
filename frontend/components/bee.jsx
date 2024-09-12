import React, { useEffect, useState } from "react";

const Bee = () => {
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

  useEffect(() => {
    getRandomPosition();
    getRandomBeeImage();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <img 
      src={beeImage} 
      alt="bee" 
      style={{
        position: "absolute",
        top: `${position.top - scrollY * 0.5}px`,
        left: `${position.left}px`,
        width: "25px",
        transform: `translateY(${scrollY * 0.3}px)`,
      }}
    />
  );
};

export default Bee;
