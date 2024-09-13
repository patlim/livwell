import React from 'react';
import TextSection from './textSection';
import Practitioner from './practitionerSection';
import EventsSection from './eventsSection';
import Cta from './cta';

const PageBuilder = ({ pageBuilder }) => {
  return (
    <div>
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
              buttonUrl={block.buttonUrl}
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
        return null;
      })}
      <Cta />
    </div>
  );
};

export default PageBuilder;
