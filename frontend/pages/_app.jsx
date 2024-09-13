import '../styles/globals.css'
import { Averia_Serif_Libre, Montserrat } from 'next/font/google'
import useScrollFade from '../state/hooks/useScrollFade';
import Cta from "../components/cta";
import Footer from "../components/footer";
import Nav from '../components/nav';
import Bee from '../components/bee';

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

const numBees = 4;

export default function App({ Component, pageProps }) {
  useScrollFade();
  return (
    <main className={`${averia.variable} ${montserrat.variable}`}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
      {[...Array(numBees)].map((_, index) => (
        <Bee key={index} />
      ))}
    </main>
  )
}