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
  transform: ${({ isVisible }) => (isVisible ? "translate(-50%, 0)" : "translate(-50%, -20px)")};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 16px;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    border-radius: 1.5px;
    background-color: var(--foreground);
    margin: 4px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
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
  z-index: 999; /* Make sure it's above everything else */
  
  a {
    font-family: var(--font-averia);
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
    font-family: var(--font-averia);
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
`

const Decal = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 95%;
`

const Nav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // To ensure the nav visibility is updated if the page loads scrolled down

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavContainer isVisible={isNavVisible}>
        <a href="/"><Logo src="/images/logo.svg" alt="Logo" /></a>
        <LinkContainer>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/events">Events</a>
          <a href="/contact">Contact</a>
        </LinkContainer>
        <Hamburger onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      </NavContainer>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <CloseButton onClick={() => setIsMobileMenuOpen(false)}><img src="/images/close.svg" /></CloseButton>
        <a href="/"><Logo src="/images/logo.svg" alt="Logo" /></a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/events">Events</a>
        <a href="/contact">Contact</a>
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
