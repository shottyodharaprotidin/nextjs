
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

export async function createComment(articleDocumentId, authorName, authorEmail, content) {
  try {
    return await fetchAPI('/comments', {
      method: 'POST',
      body: JSON.stringify({
        data: {
          content,
          authorName,
          authorEmail: authorEmail || null,
          article: articleDocumentId,
        },
      }),
    });
  } catch (error) {
    console.error('createComment failed:', error);
    throw error;
  }
}
