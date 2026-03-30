'use client';

export default function PreviewBanner({ slug, locale }) {
  const isBangla = String(locale || 'bn').toLowerCase().startsWith('bn');
  const exitLabel = isBangla ? 'প্রিভিউ বন্ধ করুন' : 'Exit Preview';

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '32px',
      background: '#1f2937',
      color: '#f3f4f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      zIndex: 99999,
      fontSize: '13px',
      fontWeight: '500',
      borderBottom: '1px solid #374151',
    }}>
      <span style={{ opacity: 0.75 }}>
        {isBangla ? 'প্রিভিউ মোড' : 'Preview Mode'}
      </span>
      <a
        href={`/api/disable-preview?slug=${encodeURIComponent(slug)}`}
        style={{
          color: '#60a5fa',
          textDecoration: 'none',
          padding: '2px 6px',
          borderRadius: '3px',
          fontSize: '12px',
          fontWeight: '600',
          transition: 'background 0.15s',
        }}
        onMouseEnter={(e) => e.target.style.background = 'rgba(96, 165, 250, 0.1)'}
        onMouseLeave={(e) => e.target.style.background = 'transparent'}
      >
        {exitLabel}
      </a>
    </div>
  );
}
