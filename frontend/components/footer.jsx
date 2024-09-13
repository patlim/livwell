import Link from "next/link";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 64px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 24px;
  }
`

const Decal = styled.img`
  grid-column: 1 / span 2;
  width: 60%;
  margin: auto;
  @media (max-width: 768px) {
    display: none;
  }
`
const Logo = styled.img`
  width: 100%;
  max-width: 1000px;
  height: auto;
  margin: auto;
  grid-row: 2;
  grid-column: 1 / span 3;
`

const LinkListContainer = styled.div`
  margin-top: auto;
`
const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: inherit;
    padding: 0;
    border: none;
  }
`

const Footer = () => {
  return (
    <FooterContainer data-scroll-fade>
      <Decal src="/images/lavender.png" alt="lav" />
      <LinkListContainer>
        <LinkList>
          <Link href='about'>About</Link>
          <Link href='services'>Services</Link>
          <Link href='events'>Events</Link>
          <Link href='contact'>Contact</Link>
        </LinkList>
        <br />
        <LinkList>
          <a>+44 78 0516 6798</a>
          <a>livwelllondon@gmail.com</a>
        </LinkList>
      </LinkListContainer>
      <Logo src="/images/logo.svg" alt="logo" />
    </FooterContainer>
  );
}
 
export default Footer;