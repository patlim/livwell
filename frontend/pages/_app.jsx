import '../styles/globals.css'
import { Averia_Serif_Libre, Montserrat } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion';
import useScrollFade from '../state/hooks/useScrollFade';
import Footer from "../components/footer";
import Nav from '../components/nav';
import Bee from '../components/bee';
import { useRouter } from 'next/router';

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

const numBees = 3;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useScrollFade();
  return (
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
      {[...Array(numBees)].map((_, index) => (
        <Bee key={index} />
      ))}
    </main>
  )
}