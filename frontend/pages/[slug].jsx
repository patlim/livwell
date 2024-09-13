// pages/[slug].jsx
import React from 'react';
import TitleSection from '../components/titleSection';
import PageBuilder from '../components/pageBuilder';
import groq from 'groq';
import client from '../client';

const Page = ({ page }) => {
  if (!page) {
    return <div>Loading...</div>;
  }

  const { title, pageBuilder } = page;

  return (
    <div>
      <article>
        <TitleSection heading={title} />
        <PageBuilder pageBuilder={pageBuilder} />
      </article>
    </div>
  );
};

const query = groq`*[_type == "page" && slug.current == $slug][0]{ 
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

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "page" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const page = await client.fetch(query, { slug });
  return {
    props: {
      page,
    },
  };
}

export default Page;
