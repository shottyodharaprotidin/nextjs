
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request) {
  // Set cookie for 1 year
  const cookieStore = await cookies();
  cookieStore.set('NEXT_LOCALE', 'bn', { maxAge: 60 * 60 * 24 * 365, httpOnly: false, path: '/' });
  
  // Get the referer to redirect back, or default to home
  const referer = request.headers.get('referer') || '/';
  redirect(referer);
}
