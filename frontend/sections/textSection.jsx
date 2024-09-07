import { PortableText } from '@portabletext/react';
import styled from 'styled-components';

const BodyContainer = styled.div`
  max-width: 650px;
  margin: auto;
  text-align: ${(props) => props.$alignment || 'center'};

  p:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const Heading = styled.h2`
  text-align: ${(props) => props.$alignment || 'center'};
  margin-bottom: 1rem;
`;

const TextSection = ({ heading, showHeading, alignment = 'center', body }) => {
  return (
    <section>
      {heading && showHeading && <Heading $alignment={alignment}>{heading}</Heading>}
      <BodyContainer $alignment={alignment}>
        <PortableText value={body} />
      </BodyContainer>
    </section>
  );
}

export default TextSection;
