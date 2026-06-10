import React, { useEffect } from 'react'; 
import HomeSection from '../components/homeSection';
import PageBuilder from '../components/pageBuilder';
import client from '../client';
import getPageQuery from '../utils/getPageQuery';
import TestimonialSection from '../components/testimonialSection';
import Head from 'next/head';
import { PlimAscii } from '../components/PlimAscii';

const pageTitle = 'Livwell | Home';
const HomePage = ({ page }) => {
  if (!page) {
    return <div>Loading...</div>;
  }

  const { pageBuilder } = page;

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
      </Head>
      <div>
        <PlimAscii />
        <HomeSection />
        <PageBuilder pageBuilder={pageBuilder} />
        <TestimonialSection />
      </div>
    </>
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
