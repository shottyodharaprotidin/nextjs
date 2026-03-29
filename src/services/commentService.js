
import { fetchAPI } from '@/lib/strapi';

function isApprovedComment(comment) {
  if (!comment || comment.removed || comment.blocked) return false;

  const status = String(comment.approvalStatus || comment.status || '').toUpperCase();
  if (!status) return true;

  return status === 'APPROVED';
}

function filterApprovedTree(comments) {
  if (!Array.isArray(comments)) return [];

  return comments
    .filter(isApprovedComment)
    .map((comment) => {
      const children = filterApprovedTree(comment.children || []);
      return { ...comment, children };
    });
}

/**
 * Fetch comments for a specific article using custom public Strapi endpoint
 */
export async function getCommentsByArticle(articleDocumentId, locale = 'bn') {
  try {
    const response = await fetchAPI(
      `/public-comments/${articleDocumentId}?locale=${encodeURIComponent(locale)}`,
      { silent: true }
    );
    return filterApprovedTree(response || []);
  } catch (error) {
    console.warn('getCommentsByArticle failed:', error);
    return [];
  }
}

/**
 * Post a new comment using custom public Strapi endpoint
 */
export async function createComment(articleDocumentId, authorName, authorEmail, content, threadOf = null, locale = 'bn') {
  try {
    const body = {
      author: {
        id: authorEmail,
        name: authorName,
        email: authorEmail,
      },
      content,
      locale,
    };
    if (threadOf) {
      body.threadOf = threadOf;
    }

    return await fetchAPI(
      `/public-comments/${articleDocumentId}`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      }
    );
  } catch (error) {
    console.error('createComment failed:', error);
    throw error;
  }
}
