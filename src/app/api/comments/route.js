export async function GET(request) {
  return new Response(JSON.stringify({ message: 'Comments API endpoint. Use POST to create comments.' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { content, authorName, authorEmail, article } = body || {};

    if (!content || !authorName || !article) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://app.shottyodharaprotidin.com';
    // Prefer a server-only token, but fall back to NEXT_PUBLIC for local dev if present
    const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || '';

    // Resolve documentId -> numeric id when needed
    let articleId = article;
    if (typeof article === 'string' && !/^[0-9]+$/.test(article)) {
      const lookupRes = await fetch(`${STRAPI_URL}/api/articles?filters[documentId][$eq]=${encodeURIComponent(article)}&fields=id`);
      const lookupJson = await lookupRes.json().catch(() => null);
      const found = lookupJson?.data?.[0];
      if (!found) {
        return new Response(JSON.stringify({ error: 'Article not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
      }
      articleId = found.id;
    }

    articleId = Number(articleId);
    if (!articleId || Number.isNaN(articleId)) {
      return new Response(JSON.stringify({ error: 'Invalid article id' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const headers = { 'Content-Type': 'application/json' };
    if (STRAPI_API_TOKEN) headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;

    const strapiRes = await fetch(`${STRAPI_URL}/api/comments`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ data: { content, authorName, authorEmail: authorEmail || null, article: articleId } }),
    });

    const strapiJson = await strapiRes.json().catch(() => null);
    return new Response(JSON.stringify(strapiJson || {}), { status: strapiRes.status || 500, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    console.error('/api/comments error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}