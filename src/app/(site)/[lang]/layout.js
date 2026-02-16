import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsTicker from '@/components/homepage/NewsTicker';
import { ClientProviders } from '../../client-providers';
import LangSync from '@/components/common/LangSync';

export async function generateMetadata({ params }) {
  const lang = params.lang || 'bn';
  return {
    title: lang === 'bn' ? 'শট্টৎওধরপ্রতিদিনPT - বাংলা সংবাদ' : 'ShottyodharaProtidinPT - English News',
    description: lang === 'bn' ? 'সর্বশেষ বাংলা সংবাদ এবং আপডেট' : 'Latest English News and Updates',
  }
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'bn' }]
}

export default function LocaleLayout({ children, params }) {
  const lang = params.lang || 'bn';
  
  return (
    <>
      <LangSync lang={lang} />
      <ClientProviders initialLang={lang}>
        <Header />
        <NewsTicker />
        {children}
        <Footer />
      </ClientProviders>
    </>
  )
}
