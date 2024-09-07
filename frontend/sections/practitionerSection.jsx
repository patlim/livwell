import React from 'react';
import styled from 'styled-components';

const PractitionerSection = styled.section`
  display: flex;
  max-width: 750px;
  margin: auto;
  width: 100%;
`;

const Headshot = styled.img`
  border-radius: 50%;
  width: 50%;
  height: auto;
  object-fit: contain;
`;

const Info = styled.div`
  text-align: right;
  margin-left: -80px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  a {
    width: auto;
    width: fit-content;
  }
`;

const Name = styled.h3`
  margin-bottom: 0.5rem;
  position: relative;
  white-space: nowrap;
`;

const Description = styled.h5`
  margin-bottom: 1rem;
`;

const Arrow = styled.img`
  width: 150px;
  height: auto;
  object-fit: contain;
  margin: 40px auto 32px 32px;
`;

const Practitioner = ({ name, description, headshot, buttonText, buttonUrl }) => {
  return (
    <PractitionerSection>
      {headshot && <Headshot src={headshot} alt={`${name} headshot`} />}
      <Info>
        <Arrow src="/images/arrow.svg" alt="arrow" />
        {name && <Name>{name}</Name>}
        {description && <Description>{description}</Description>}
        {buttonText && buttonUrl && <a href={buttonUrl}>{buttonText}</a>}
      </Info>
    </PractitionerSection>
  );
};

export default Practitioner;
