// pages/index.jsx
import React from 'react';
import HomeSection from '../components/homeSection';
import PageBuilder from '../components/pageBuilder';
import client from '../client';
import groq from 'groq';

const HomePage = ({ page }) => {
  if (!page) {
    return <div>Loading...</div>;
  }

  const { title, pageBuilder } = page;

  return (
    <div>
      <article>
        <HomeSection />
        <PageBuilder pageBuilder={pageBuilder} />
      </article>
    </div>
  );
};

const homePageQuery = groq`*[_type == "page" && slug.current == "home"][0]{ 
  title, 
  pageBuilder[]{
    _type,
    ...,
    _type == "textSection" => @->{
      _type,
      heading,
      showHeading,
      alignment,
      body
    },
    _type == "practitionerSection" => @->{
      _type,
      name,
      description,
      headshot{
        asset->{
          url
        }
      },
      buttonText,
      buttonUrl
    },
    _type == "eventsSection" => @->{
      _type,
      "events": events[]->{
        title,
        date,
        location,
        description,
        image{
          asset->{
            url
          }
        }
      } | order(date asc) [date >= now()]
    },
    _type == "pricingSection" => @->{
      _type,
      heading,
      subheading,
      prices[]{
        duration,
        price
      }
    }
  }
}`;

export async function getStaticProps() {
  const page = await client.fetch(homePageQuery);
  return {
    props: {
      page,
    },
  };
}

export default HomePage;
