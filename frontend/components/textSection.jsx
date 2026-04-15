import { PortableText } from '@portabletext/react';
import styled from 'styled-components';

const customComponents = {
  block: {
    normal: ({ children }) => <p data-scroll-fade>{children}</p>,
    h1: ({ children }) => <h1 data-scroll-fade>{children}</h1>,
    h2: ({ children }) => <h2 data-scroll-fade>{children}</h2>,
    h3: ({ children }) => <h3 data-scroll-fade>{children}</h3>,
    blockquote: ({ children }) => <blockquote data-scroll-fade>{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul data-scroll-fade>{children}</ul>,
    number: ({ children }) => <ol data-scroll-fade>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li data-scroll-fade>{children}</li>,
    number: ({ children }) => <li data-scroll-fade>{children}</li>,
  },
};

const BodyContainer = styled.div`
  text-align: ${(props) => props.$alignment || 'center'};
`;

const Heading = styled.h2`
  text-align: ${(props) => props.$alignment || 'center'};
  margin-bottom: 1rem;
`;

const TextSection = ({ heading, showHeading, alignment = 'center', body }) => {
  return (
    <section id={heading}>
      {heading && showHeading && <Heading data-scroll-fade className='h3' $alignment={alignment}>{heading}</Heading>}
      <BodyContainer className='portable-text-container' $alignment={alignment}>
        <PortableText value={body} components={customComponents} />
      </BodyContainer>
    </section>
  );
}

export default TextSection;