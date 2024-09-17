import React, { useEffect } from 'react';
import TitleSection from '../components/titleSection';
import PageBuilder from '../components/pageBuilder';
import client from '../client';
import getPageQuery from '../utils/getPageQuery';

const ServicesPage = ({ page }) => {
  if (!page) {
    return <div>Loading...</div>;
  }

  const { title, pageBuilder } = page;

  useEffect(() => {
    document.title = 'Livwell | Our services';
  }, []);

  return (
    <div>
      <TitleSection heading={title} />
      <PageBuilder pageBuilder={pageBuilder} />
    </div>
  );
};

const query = getPageQuery('services');

export async function getStaticProps() {
  const page = await client.fetch(query);
  return {
    props: {
      page,
    },
  };
}

export default ServicesPage;
