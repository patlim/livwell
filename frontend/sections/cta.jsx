import styled from "styled-components";

const Section = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 80vh;
  a {
    font-size: 24px;
  }
`
const BgImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: auto;
  object-fit: contain;
  margin: auto;
  z-index: -1;
`

const Cta = () => {
  return (
    <Section>
      <h2>Begin your<br/>journey</h2>
      <a>Discover now</a>
      <BgImage
        src="/images/leaf.png"
        alt="background"
      />
    </Section>
  );
}
 
export default Cta;