import React from 'react';
import TitleSection from '../components/titleSection';
import PageBuilder from '../components/pageBuilder';
import client from '../client';
import getPageQuery from '../utils/getPageQuery';

const AboutPage = ({ page }) => {
  if (!page) {
    return <div>Loading...</div>;
  }

  const { title, pageBuilder } = page;

  return (
    <div>
      <TitleSection heading={title} />
      <PageBuilder pageBuilder={pageBuilder} />
    </div>
  );
};

const query = getPageQuery('about');

export async function getStaticProps() {
  const page = await client.fetch(query);
  return {
    props: {
      page,
    },
  };
}

export default AboutPage;
