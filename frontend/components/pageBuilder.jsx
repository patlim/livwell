import React, { useEffect, useRef, useState } from 'react';
import TextSection from './textSection';
import Practitioner from './practitionerSection';
import EventsSection from './eventsSection';
import Cta from './cta';
import PricingSection from './pricingSection';
import TestimonialSection from './testimonialSection';
import styled from 'styled-components';
import Bee from './bee';

const PageBuilderContainer = styled.div`
  position: relative;
`

const PageBuilder = ({ pageBuilder }) => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [numberOfBees,setNumberOfBees] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setNumberOfBees(Math.floor(offsetHeight / (1.5 * window.innerHeight)));
      setContainerSize({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  return (
    <PageBuilderContainer ref={containerRef}>
      {pageBuilder.map((block, index) => {
        if (block._type === 'textSection') {
          return (
            <TextSection
              key={index}
              heading={block.heading}
              showHeading={block.showHeading}
              body={block.body}
              alignment={block.alignment}
            />
          );
        }
        if (block._type === 'practitionerSection') {
          return (
            <Practitioner
              key={index}
              name={block.name}
              description={block.description}
              headshot={block.headshot.asset.url}
              buttonText={block.buttonText}
              buttonLink={block.buttonLink}
            />
          );
        }
        if (block._type === 'eventsSection') {
          return (
            <EventsSection
              key={index}
              events={block.events}
            />
          );
        }
        if (block._type === 'pricingSection') {
          return (
            <PricingSection
              key={index}
              heading={block.heading}
              subheading={block.subheading}
              prices={block.prices}
            />
          );
        }
        if (block._type === 'testimonialSection') {
          return (
            <TestimonialSection
              key={index}
              testimonials={block.testimonials}
            />
          )
        }
        return null;
      })}
      <Cta />
      {[...Array(numberOfBees)].map((_, index) => (
        <Bee key={index} containerSize={containerSize} />
      ))}
    </PageBuilderContainer>
  );
};

export default PageBuilder;
