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

const HomeLink = styled(Link)`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  grid-row: 2;
  grid-column: 1 / span 3;
`
const Logo = styled.img`
  width: 100%;
  height: auto;
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
    <FooterContainer>
      <Decal src="/images/lavender.png" alt="lav" />
      <LinkListContainer>
        <LinkList>
          <Link href='about' passHref>About</Link>
          <Link href='services' passHref>Services</Link>
          <Link href='events' passHref>Events</Link>
          <Link href='about#FAQs' scroll={false} passHref>FAQs</Link>
          <Link href='contact' passHref>Contact</Link>
        </LinkList>
        <br />
        <LinkList>
          <p>+44 78 0516 6798</p>
          <Link href="mailto:livwelllondon@gmail.com">livwelllondon@gmail.com</Link>
        </LinkList>
      </LinkListContainer>
      <HomeLink href='/' passHref><Logo src="/images/logo.svg" alt="logo" /></HomeLink>
    </FooterContainer>
  );
}
 
export default Footer;