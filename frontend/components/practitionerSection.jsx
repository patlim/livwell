import React from 'react';
import styled from 'styled-components';

const PractitionerSection = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  max-width: 750px;
`;

const HeadshotContainer = styled.div`
  position: relative;
  width: 250px;
  margin: auto;
`

const Headshot = styled.img`
  border-radius: 50%;
  width: 100%;
  height: auto;
  object-fit: contain;
  position: relative;
`;

const Bee = styled.img`
  position: absolute;
  width: 50px;
  height: auto;
  object-fit: contain;
  bottom: 15px;
  left: 15px;
`

const Info = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  a {
    width: fit-content;
  }
`;

const Name = styled.h3`
  margin-bottom: 0.5rem;
  position: relative;
`;

const Description = styled.h5`
  margin-bottom: 1rem;
`;

const Practitioner = ({ name, description, headshot, buttonText, buttonUrl }) => {
  return (
    <PractitionerSection data-scroll-fade>
      <HeadshotContainer>
        <Headshot src={headshot} alt={`${name} headshot`} />
        <Bee src='/images/bee.svg' alt='bee'/>
      </HeadshotContainer>
      <Info>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <a href={buttonUrl}><h5>{buttonText}</h5></a>
      </Info>
    </PractitionerSection>
  );
};

export default Practitioner;
