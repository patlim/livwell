import { PortableText } from '@portabletext/react';
import styled from 'styled-components';

const customComponents = {
  block: {
    normal: ({ children }) => <p data-scroll-fade="true">{children}</p>,
    h1: ({ children }) => <h1 data-scroll-fade="true">{children}</h1>,
    h2: ({ children }) => <h2 data-scroll-fade="true">{children}</h2>,
    h3: ({ children }) => <h3 data-scroll-fade="true">{children}</h3>,
    blockquote: ({ children }) => <blockquote data-scroll-fade="true">{children}</blockquote>,
  },
};

const BodyContainer = styled.div`
  margin: auto;
  text-align: ${(props) => props.$alignment || 'center'};
  max-width: 650px;

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
      {heading && showHeading && <Heading data-scroll-fade className='h4' $alignment={alignment}>{heading}</Heading>}
      <BodyContainer $alignment={alignment}>
        <PortableText value={body} components={customComponents} />
      </BodyContainer>
    </section>
  );
}

export default TextSection;