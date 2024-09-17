import React from 'react';
import HomeSection from '../components/homeSection';
import PageBuilder from '../components/pageBuilder';
import client from '../client';
import getPageQuery from '../utils/getPageQuery';
import { motion } from 'framer-motion';

const HomePage = ({ page }) => {
  if (!page) {
    return <div>Loading...</div>;
  }

  const { pageBuilder } = page;

  return (
    <motion.div
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HomeSection />
      <PageBuilder pageBuilder={pageBuilder} />
    </motion.div>
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
