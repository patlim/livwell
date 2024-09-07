import '../styles/globals.css'
import { Averia_Serif_Libre, Montserrat } from 'next/font/google'

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
  return (
    <main className={`${averia.variable} ${montserrat.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}