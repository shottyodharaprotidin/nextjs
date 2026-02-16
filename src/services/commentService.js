
import { fetchAPI } from '@/lib/strapi';

export async function getCommentsByArticle(articleSlug) {
  try {
    const queryParams = new URLSearchParams({
      'filters[article][slug][$eq]': articleSlug,
      'sort': 'createdAt:desc',
      'pagination[limit]': 100,
    });

    return await fetchAPI(`/comments?${queryParams}`);
  } catch (error) {
    console.warn('getCommentsByArticle failed:', error);
    return { data: [] };
  }
}

export async function createComment(articleIdOrDocumentId, authorName, authorEmail, content) {
  try {
    // POST directly to Strapi. For authentication on write-protected endpoints (production),
    // set NEXT_PUBLIC_STRAPI_API_TOKEN to a Strapi API token with create permissions.
    // Local development typically allows public POSTs.
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        article: articleIdOrDocumentId,
        authorName,
        authorEmail: authorEmail || null,
        content,
      }),
    }).catch(async (fetchErr) => {
      // If fetch to /api/comments fails (route not found), fall back to direct Strapi client-side call
      console.warn('Server route /api/comments failed, falling back to client-side Strapi call:', fetchErr.message);
      return fallbackCreateCommentDirect(articleIdOrDocumentId, authorName, authorEmail, content);
    });

    if (!res.ok) {
      const errBody = await res.json().catch(() => null);
      const err = new Error('Failed to post comment');
      err.status = res.status;
      err.body = errBody;
      throw err;
    }

    return await res.json();
  } catch (error) {
    console.error('createComment failed:', error);
    throw error;
  }
}

// Fallback: direct Strapi call (client-side, uses NEXT_PUBLIC token if available)
async function fallbackCreateCommentDirect(articleIdOrDocumentId, authorName, authorEmail, content) {
  // Dynamic import to avoid issues if fetchAPI is not available in comments context
  const { fetchAPI } = await import('@/lib/strapi');
  
  let articleId = articleIdOrDocumentId;
  if (typeof articleIdOrDocumentId === 'string' && !/^[0-9]+$/.test(articleIdOrDocumentId)) {
    const lookup = await fetchAPI(`/articles?filters[documentId][$eq]=${encodeURIComponent(articleIdOrDocumentId)}&fields=id`);
    const found = lookup?.data?.[0];
    if (!found) {
      throw new Error('Article not found for provided documentId');
    }
    articleId = found.id;
  }

  articleId = Number(articleId);
  if (!articleId || Number.isNaN(articleId)) {
    throw new Error('Invalid article id provided to createComment');
  }

  // Create the fetch response object manually so calling code expects the same interface
  const mockRes = await fetchAPI('/comments', {
    method: 'POST',
    body: JSON.stringify({
      data: {
        content,
        authorName,
        authorEmail: authorEmail || null,
        article: articleId,
      },
    }),
  });
  // Wrap in a response-like object
  return { ok: true, json: () => Promise.resolve(mockRes) };
}
