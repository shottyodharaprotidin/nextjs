"use client";

import { useState, useEffect } from 'react';
import { getCommentsByArticle, createComment } from '@/services/commentService';
import { formatDate } from '@/lib/strapi';
import { useLanguage } from '@/context/LanguageContext';

const t = {
  bn: {
    title: 'মন্তব্য',
    noComments: 'এখনো কোনো মন্তব্য নেই। প্রথম মন্তব্য করুন!',
    name: 'আপনার নাম',
    email: 'ইমেইল (ঐচ্ছিক)',
    comment: 'আপনার মন্তব্য লিখুন...',
    submit: 'মন্তব্য প্রকাশ করুন',
    submitting: 'প্রকাশ হচ্ছে...',
    success: 'আপনার মন্তব্য সফলভাবে প্রকাশিত হয়েছে!',
    error: 'মন্তব্য প্রকাশ করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।',
    leaveComment: 'আপনার মন্তব্য দিন',
  },
  en: {
    title: 'Comments',
    noComments: 'No comments yet. Be the first to comment!',
    name: 'Your name',
    email: 'Email (optional)',
    comment: 'Write your comment...',
    submit: 'Post Comment',
    submitting: 'Posting...',
    success: 'Your comment has been posted successfully!',
    error: 'Failed to post comment. Please try again.',
    leaveComment: 'Leave a comment',
  },
};

const Comments = ({ articleSlug, articleDocumentId }) => {
  const { language } = useLanguage();
  const labels = t[language] || t.bn;

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [flash, setFlash] = useState(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await getCommentsByArticle(articleSlug);
      setComments(res?.data || []);
      setLoading(false);
    }
    if (articleSlug) load();

    // Load saved name and email from localStorage
    if (typeof window !== 'undefined') {
      const savedName = localStorage.getItem('commenterName');
      const savedEmail = localStorage.getItem('commenterEmail');
      if (savedName) setAuthorName(savedName);
      if (savedEmail) setAuthorEmail(savedEmail);
    }
  }, [articleSlug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!authorName.trim() || !content.trim()) return;

    setSubmitting(true);
    setFlash(null);

    try {
      // Save name and email to localStorage for future comments
      if (typeof window !== 'undefined') {
        localStorage.setItem('commenterName', authorName.trim());
        if (authorEmail.trim()) {
          localStorage.setItem('commenterEmail', authorEmail.trim());
        }
      }

      await createComment(articleDocumentId, authorName.trim(), authorEmail.trim(), content.trim());
      setFlash({ type: 'success', msg: labels.success });
      setContent('');
      const res = await getCommentsByArticle(articleSlug);
      setComments(res?.data || []);
    } catch {
      setFlash({ type: 'error', msg: labels.error });
    } finally {
      setSubmitting(false);
    }
  };

  // Generate avatar color from name
  const getAvatarColor = (name) => {
    const colors = [
      '#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6',
      '#1abc9c', '#e67e22', '#e84393', '#00b894', '#6c5ce7',
    ];
    let hash = 0;
    for (let i = 0; i < (name || '').length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const timeAgo = (dateStr) => {
    const now = new Date();
    const date = new Date(dateStr);
    const diffMs = now - date;
    const diffMin = Math.floor(diffMs / 60000);
    const diffHr = Math.floor(diffMs / 3600000);
    const diffDay = Math.floor(diffMs / 86400000);

    if (language === 'bn') {
      if (diffMin < 1) return 'এইমাত্র';
      if (diffMin < 60) return `${diffMin} মিনিট আগে`;
      if (diffHr < 24) return `${diffHr} ঘণ্টা আগে`;
      if (diffDay < 7) return `${diffDay} দিন আগে`;
      return formatDate(dateStr, 'bn');
    }
    if (diffMin < 1) return 'Just now';
    if (diffMin < 60) return `${diffMin}m ago`;
    if (diffHr < 24) return `${diffHr}h ago`;
    if (diffDay < 7) return `${diffDay}d ago`;
    return formatDate(dateStr, 'en');
  };

  return (
    <>
      <style jsx global>{`
        .cmt-section {
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 2px solid #eee;
        }
        .cmt-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.8rem;
        }
        .cmt-header h3 {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0;
          color: #1a1a2e;
        }
        .cmt-count {
          background: #e74c3c;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 10px;
          border-radius: 20px;
        }
        .cmt-form-card {
          background: #f7f8fa;
          border: 1px solid #e8ecf1;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }
        .cmt-form-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        }
        .cmt-input {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #dde1e7;
          border-radius: 8px;
          font-size: 0.9rem;
          background: #fff;
          color: #333;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
        }
        .cmt-input:focus {
          border-color: #e74c3c;
          box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
        }
        .cmt-input::placeholder {
          color: #aab0bc;
        }
        .cmt-textarea {
          resize: vertical;
          min-height: 100px;
        }
        .cmt-row {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }
        .cmt-row > * {
          flex: 1;
        }
        .cmt-submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 24px;
          background: #e74c3c;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
        }
        .cmt-submit-btn:hover:not(:disabled) {
          background: #c0392b;
          transform: translateY(-1px);
        }
        .cmt-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .cmt-flash {
          margin-top: 12px;
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .cmt-flash-success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }
        .cmt-flash-error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }
        .cmt-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .cmt-item {
          display: flex;
          gap: 14px;
          padding: 1.2rem 0;
          border-bottom: 1px solid #f0f0f0;
        }
        .cmt-item:last-child {
          border-bottom: none;
        }
        .cmt-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 700;
          font-size: 1rem;
          flex-shrink: 0;
          text-transform: uppercase;
        }
        .cmt-body {
          flex: 1;
          min-width: 0;
        }
        .cmt-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }
        .cmt-author {
          font-weight: 600;
          font-size: 0.9rem;
          color: #1a1a2e;
        }
        .cmt-time {
          font-size: 0.78rem;
          color: #8e99a4;
        }
        .cmt-text {
          font-size: 0.92rem;
          line-height: 1.6;
          color: #444;
          margin: 0;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        .cmt-empty {
          text-align: center;
          padding: 2.5rem 1rem;
          color: #8e99a4;
        }
        .cmt-empty-icon {
          font-size: 2.5rem;
          margin-bottom: 0.8rem;
          opacity: 0.4;
        }
        .cmt-empty p {
          margin: 0;
          font-size: 0.95rem;
        }
        .cmt-loader {
          text-align: center;
          padding: 2rem;
        }

        /* ===== DARK MODE ===== */
        [data-theme="skin-dark"] .cmt-section {
          border-top-color: #2d2d3f;
        }
        [data-theme="skin-dark"] .cmt-header h3 {
          color: #e0e0e6;
        }
        [data-theme="skin-dark"] .cmt-form-card {
          background: #1e1e2f;
          border-color: #2d2d3f;
        }
        [data-theme="skin-dark"] .cmt-form-title {
          color: #c8c8d4;
        }
        [data-theme="skin-dark"] .cmt-input {
          background: #16162a;
          border-color: #2d2d3f;
          color: #e0e0e6;
        }
        [data-theme="skin-dark"] .cmt-input:focus {
          border-color: #e74c3c;
          box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2);
        }
        [data-theme="skin-dark"] .cmt-input::placeholder {
          color: #555568;
        }
        [data-theme="skin-dark"] .cmt-item {
          border-bottom-color: #2d2d3f;
        }
        [data-theme="skin-dark"] .cmt-author {
          color: #e0e0e6;
        }
        [data-theme="skin-dark"] .cmt-time {
          color: #6b6b80;
        }
        [data-theme="skin-dark"] .cmt-text {
          color: #b0b0c0;
        }
        [data-theme="skin-dark"] .cmt-empty {
          color: #6b6b80;
        }
        [data-theme="skin-dark"] .cmt-flash-success {
          background: #1a3a2a;
          color: #6bda8a;
          border-color: #2a5a3a;
        }
        [data-theme="skin-dark"] .cmt-flash-error {
          background: #3a1a1a;
          color: #da6b6b;
          border-color: #5a2a2a;
        }

        @media (max-width: 576px) {
          .cmt-row {
            flex-direction: column;
            gap: 12px;
          }
          .cmt-form-card {
            padding: 1rem;
          }
          .cmt-avatar {
            width: 36px;
            height: 36px;
            font-size: 0.85rem;
          }
        }
      `}</style>

      <div className="cmt-section">
        {/* Header */}
        <div className="cmt-header">
          <h3>
            <i className="far fa-comments" style={{ marginRight: 8 }}></i>
            {labels.title}
          </h3>
          {!loading && comments.length > 0 && (
            <span className="cmt-count">{comments.length}</span>
          )}
        </div>

        {/* Comment Form */}
        <div className="cmt-form-card">
          <div className="cmt-form-title">
            <i className="far fa-edit" style={{ marginRight: 6 }}></i>
            {labels.leaveComment}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="cmt-row">
              <input
                type="text"
                className="cmt-input"
                placeholder={labels.name}
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                required
                maxLength={100}
              />
              <input
                type="email"
                className="cmt-input"
                placeholder={labels.email}
                value={authorEmail}
                onChange={(e) => setAuthorEmail(e.target.value)}
                maxLength={200}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <textarea
                className="cmt-input cmt-textarea"
                placeholder={labels.comment}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                maxLength={2000}
              />
            </div>
            <button
              type="submit"
              className="cmt-submit-btn"
              disabled={submitting || !authorName.trim() || !content.trim()}
            >
              {submitting ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  {labels.submitting}
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  {labels.submit}
                </>
              )}
            </button>
          </form>

          {flash && (
            <div className={`cmt-flash ${flash.type === 'success' ? 'cmt-flash-success' : 'cmt-flash-error'}`}>
              {flash.msg}
            </div>
          )}
        </div>

        {/* Comments List */}
        {loading ? (
          <div className="cmt-loader">
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : comments.length === 0 ? (
          <div className="cmt-empty">
            <div className="cmt-empty-icon">💬</div>
            <p>{labels.noComments}</p>
          </div>
        ) : (
          <div className="cmt-list">
            {comments.map((item) => {
              const c = item.attributes || item;
              const name = c.authorName || '?';
              return (
                <div key={item.id} className="cmt-item">
                  <div
                    className="cmt-avatar"
                    style={{ backgroundColor: getAvatarColor(name) }}
                  >
                    {name[0]}
                  </div>
                  <div className="cmt-body">
                    <div className="cmt-meta">
                      <span className="cmt-author">{name}</span>
                      <span className="cmt-time">{timeAgo(c.createdAt || c.publishedAt)}</span>
                    </div>
                    <p className="cmt-text">{c.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Comments;
