import React, { useEffect } from 'react';
import HomeSection from '../components/homeSection';
import PageBuilder from '../components/pageBuilder';
import client from '../client';
import getPageQuery from '../utils/getPageQuery';

const HomePage = ({ page }) => {
  if (!page) {
    return <div>Loading...</div>;
  }

  const { pageBuilder } = page;

  useEffect(() => {
    document.title = 'Livwell | Home';
  }, []);

  return (
    <div>
      <HomeSection />
      <PageBuilder pageBuilder={pageBuilder} />
    </div>
  );
};

const query = getPageQuery('home');

export async function getStaticProps() {
  const page = await client.fetch(query);
  return {
    props: {
      page,
    },
  };
}

export default HomePage;
