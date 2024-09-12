import { useEffect, useState } from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  max-width: 1000px;
  position: fixed;
  top: 0;
  left: 50%;
  backdrop-filter: blur(5px);
  background-color: #37422080;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "translate(-50%, 0)" : "translate(-50%, -100%)")};
  
  ${({ isTransitionApplied }) =>
    isTransitionApplied &&
    `
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  `}
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
`;

const Hamburger = styled.img`
  cursor: pointer;
  width: 18px;
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  z-index: 999;
  
  a {
    color: var(--foreground);
    font-size: 24px;
    text-decoration: none;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  color: var(--foreground);
  z-index: 2;
  width: 18px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 24px;
  a {
    color: inherit;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const BottomContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Decal = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 95%;
`;

const Nav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isTransitionApplied, setIsTransitionApplied] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
    };

    // Apply transition after page is loaded
    const applyTransition = () => {
      setIsTransitionApplied(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", applyTransition); // Apply transition when page loads

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", applyTransition);
    };
  }, []);

  return (
    <>
      <NavContainer isVisible={isNavVisible} isTransitionApplied={isTransitionApplied}>
        <a href="/"><Logo src="/images/logo.svg" alt="Logo" /></a>
        <LinkContainer>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/events">Events</a>
          <a href="/contact">Contact</a>
        </LinkContainer>
        <Hamburger src="/images/menu.svg" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      </NavContainer>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <CloseButton onClick={() => setIsMobileMenuOpen(false)}><img src="/images/close.svg" /></CloseButton>
        <a href="/" onClick={() => setIsMobileMenuOpen(false)}><Logo src="/images/logo.svg" alt="Logo" /></a>
        <a href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
        <a href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
        <a href="/events" onClick={() => setIsMobileMenuOpen(false)}>Events</a>
        <a href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        <BottomContainer>
          <Decal src="/images/lavender-vertical.png" alt="lav" />
          <p>+44 78 0516 6798</p>
          <a href="/contact"><p>livwelllondon@gmail.com</p></a>
        </BottomContainer>
      </MobileMenu>
    </>
  );
};

export default Nav;
