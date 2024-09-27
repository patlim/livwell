import '../styles/globals.css'
import { Averia_Serif_Libre, Montserrat } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion';
import useScrollFade from '../state/hooks/useScrollFade';
import Footer from "../components/footer";
import Nav from '../components/nav';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

export const averia = Averia_Serif_Libre({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'],
  variable: "--font-averia",
});
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-montserrat",
  weight: ['400', '700'],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useScrollFade();

  useEffect(() => {
    if (router.asPath.includes('#')) {
      const id = router.asPath.split('#')[1];

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 1000);
    }
  }, [router]);

  return (
    <>
      <Head>
        <meta name="description" content="Reclaim your calm" />
      </Head>
      <main className={`${averia.variable} ${montserrat.variable}`}>
        <Nav />
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}