
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
    // Ensure we send a numeric article id to Strapi relation. If caller passed a
    // documentId (string), resolve it to the numeric id first.
    let articleId = articleIdOrDocumentId;

    // If it's a non-numeric string, look up the article by documentId
    if (typeof articleIdOrDocumentId === 'string' && !/^[0-9]+$/.test(articleIdOrDocumentId)) {
      const lookup = await fetchAPI(`/articles?filters[documentId][$eq]=${encodeURIComponent(articleIdOrDocumentId)}&fields=id`);
      const found = lookup?.data?.[0];
      if (!found) {
        throw new Error('Article not found for provided documentId');
      }
      articleId = found.id;
    }

    // Coerce to number when possible
    articleId = Number(articleId);
    if (!articleId || Number.isNaN(articleId)) {
      throw new Error('Invalid article id provided to createComment');
    }

    return await fetchAPI('/comments', {
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
  } catch (error) {
    console.error('createComment failed:', error);
    throw error;
  }
}
