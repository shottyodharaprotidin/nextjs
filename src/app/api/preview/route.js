import { draftMode, cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getArticleBySlugPreview, getArticleByDocumentIdPreview } from '@/services/articleService';
import { fetchAPI } from '@/lib/strapi';

// Single types with their API endpoint and target page
const SINGLE_TYPES = [
  { endpoint: 'contact', page: '/contact' },
  { endpoint: 'header', page: '/' },
  { endpoint: 'header-top', page: '/' },
  { endpoint: 'footer', page: '/' },
  { endpoint: 'sidebar', page: '/' },
  { endpoint: 'home-page', page: '/' },
];

/**
 * Detect which single type a documentId belongs to by querying Strapi
 */
async function findSingleTypeByDocumentId(documentId) {
  for (const st of SINGLE_TYPES) {
    try {
      const data = await fetchAPI(`/${st.endpoint}`, { silent: true });
      if (data?.data?.documentId === documentId) {
        return st.page;
      }
    } catch {
      // skip
    }
  }
  return null;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');
  const locale = searchParams.get('locale') || 'bn-BD';

  if (!process.env.PREVIEW_SECRET) {
    return new Response('PREVIEW_SECRET not set', { status: 500 });
  }

  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  if (!slug) {
    return new Response('Missing slug', { status: 400 });
  }

  console.log('Preview route:', { slug, locale });

  const localeMap = { 'bn-BD': 'bn', 'en': 'en' };
  const appLocale = localeMap[locale] || locale;

  // 1. Try as article slug
  let article = null;
  try {
    article = await getArticleBySlugPreview(slug, locale);
  } catch {
    // not a slug
  }

  // 2. Try as article documentId
  if (!article) {
    article = await getArticleByDocumentIdPreview(slug, locale);
  }

  // 3. Found article → redirect to article page with draft mode
  if (article) {
    const realSlug = article.attributes?.slug || article.slug;
    if (realSlug) {
      console.log('Article preview →', realSlug);
      const draft = await draftMode();
      draft.enable();
      const cookieStore = await cookies();
      cookieStore.set('NEXT_LOCALE', appLocale, { path: '/' });
      redirect(`/article/${realSlug}?locale=${appLocale}`);
    }
  }

  // 4. Not an article — check single types (Header, Footer, Contact, etc.)
  console.log('Not an article. Checking single types...');
  const targetPage = await findSingleTypeByDocumentId(slug);
  if (targetPage) {
    console.log(`Single type preview → ${targetPage}`);
    redirect(targetPage);
  }

  // 5. Fallback to homepage
  console.log('Unknown content type. Redirecting to homepage.');
  redirect('/');
}
