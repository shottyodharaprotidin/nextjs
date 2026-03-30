import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  // Disable Draft Mode by clearing the cookie (must await in Next.js 15+)
  const draft = await draftMode();
  draft.disable();

  // Redirect to the homepage or the article page if slug is provided
  if (slug) {
      redirect(`/article/${slug}`);
  } else {
      redirect('/');
  }
}
