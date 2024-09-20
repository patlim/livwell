import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const NavContainer = styled.nav`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  backdrop-filter: blur(5px);
  background-color: #00000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

const NavContent = styled.div`
  width: 100%;
  max-width: 850px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  opacity: ${props => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
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
  opacity: ${props => (props.$isOpen ? 1 : 0)};
  transform: ${props => (props.$isOpen ? "translateY(0)" : "translateY(-100%)")};
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
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') {
      const handleScroll = () => {
        setIsLogoVisible(window.scrollY > 0);
      };

      const fadeInLogo = () => {
        setIsLogoVisible(true);
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("load", fadeInLogo);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("load", fadeInLogo);
      };
    } else {
      setIsLogoVisible(true);
    }
  }, [pathname]);

  return (
    <>
      <NavContainer>
        <NavContent>
          <Link href="/" passHref>
            <Logo src="/images/logo.svg" alt="Logo" $isVisible={isLogoVisible} />
          </Link>
          <LinkContainer>
            <Link href="/about" passHref>About</Link>
            <Link href="/services" passHref>Services</Link>
            <Link href="/events" passHref>Events</Link>
            <Link href="/contact" passHref>Contact</Link>
          </LinkContainer>
          <Hamburger src="/images/menu.svg" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </NavContent>
      </NavContainer>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <CloseButton onClick={() => setIsMobileMenuOpen(false)}><img src="/images/close.svg" alt="Close" /></CloseButton>
        <Link href="/" passHref onClick={() => setIsMobileMenuOpen(false)}>
          <Logo src="/images/logo.svg" alt="Logo" $isVisible />
        </Link>
        <Link href="/about" passHref onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        <Link href="/services" passHref onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
        <Link href="/events" passHref onClick={() => setIsMobileMenuOpen(false)}>Events</Link>
        <Link href="/contact" passHref onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        <BottomContainer>
          <Decal src="/images/lavender-vertical.png" alt="Lavender Decal" />
          <p>+44 78 0516 6798</p>
          <Link href="mailto:livwelllondon@gmail.com">
            <p>livwelllondon@gmail.com</p>
          </Link>
        </BottomContainer>
      </MobileMenu>
    </>
  );
};

export default Nav;
