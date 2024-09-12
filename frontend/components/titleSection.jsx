import styled from 'styled-components';
import Sun from './sun';

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  text-align: center;
  margin-top: -86px;
`;

const Subheading = styled.h5`
  text-align: center;
`;

const Title = ({ heading, subheading }) => {
  return (
    <Section>
      <Sun />
      <Heading>{heading}</Heading>
      {subheading && <Subheading>{subheading}</Subheading>}
    </Section>
  );
};

export default Title;
