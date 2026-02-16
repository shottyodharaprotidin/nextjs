import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@icon/themify-icons/themify-icons.css"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'animate.css/animate.css';
import { Cormorant_Garamond, Roboto, Source_Sans_3, Noto_Sans_Bengali, Noto_Sans_Devanagari } from 'next/font/google'

import ImportJs from '@/components/common/ImportJs';
import Providers from './theme-providers';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100','300','400','500','700','900'],
  variable: '--font-roboto',
  display: 'swap',
  preload: true,
})
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200','300','400','600','700','800','900'],
  variable: '--font-source-sans',
  display: 'swap',
  preload: true,
})

// Bengali font for Bangla text
const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-bengali',
  display: 'swap',
  preload: true,
})

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hindi',
  display: 'swap',
  preload: true,
})

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preload" as="image" href="/assets/images/bg-shape.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('shottyodhara-theme');
                  if (theme === 'skin-dark') {
                    document.documentElement.setAttribute('data-theme', 'skin-dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`home-nine ${cormorant.variable} ${roboto.variable} ${sourceSans.variable} ${notoSansBengali.variable} ${notoSansDevanagari.variable}`} suppressHydrationWarning>
        <ImportJs />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
