import { useEffect } from 'react';

const useScrollFade = () => {
  const scrollFade = () => {
    const fadeElements = document.querySelectorAll('[data-scroll-fade]');
    const viewportBottom = window.scrollY + window.innerHeight;

    fadeElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const elementFourth = rect.height / 2;
      const fadeInPoint = window.innerHeight - elementFourth;

      if (rect.top <= fadeInPoint) {
        element.classList.add('scrollFade--visible');
        element.classList.add('scrollFade--animate');
        element.classList.remove('scrollFade--hidden');
      } else {
        element.classList.remove('scrollFade--visible');
        element.classList.add('scrollFade--hidden');
      }
    });
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollFade);
    window.addEventListener('resize', scrollFade);

    scrollFade();

    return () => {
      document.removeEventListener('scroll', scrollFade);
      window.removeEventListener('resize', scrollFade);
    };
  }, []);
};

export default useScrollFade;