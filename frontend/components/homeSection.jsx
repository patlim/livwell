import styled from 'styled-components';
import Sun from './sun';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 1000px;
`

const SubHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 980px;
  margin: 24px auto;
  h2 {
    font-family: var(--font-montserrat);
    font-weight: normal;
    font-size: 40px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`

const Home = () => {
  return (
    <Section>
      <Sun />
      <Logo src="/images/logo.svg" alt="logo" />
      <SubHeadingContainer>
        <h2>Massage</h2>
        <h2>Reiki</h2>
        <h2>Mindfulness</h2>
      </SubHeadingContainer>
    </Section>
  );
};

export default Home;
