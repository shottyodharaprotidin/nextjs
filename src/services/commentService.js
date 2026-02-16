
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
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        article: articleIdOrDocumentId,
        authorName,
        authorEmail: authorEmail || null,
        content,
      }),
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
