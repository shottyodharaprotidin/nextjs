'use client'

import { useEffect } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';

export function ClientProviders({ children, initialLang }) {
  // Global client-side effects - runs once for entire app
  useEffect(() => {
    // Background image loader - consolidated from multiple places
    const elements = document.querySelectorAll('.bg-img');
    elements.forEach((element) => {
      const imageUrl = element.getAttribute('data-image-src');
      if (imageUrl) {
        element.style.backgroundImage = `url(${imageUrl})`;
      }
    });

    // Set LTR direction
    document.documentElement.setAttribute('dir', 'ltr');
  }, []);

  return (
    <LanguageProvider initialLang={initialLang}>
      {children}
    </LanguageProvider>
  );
}
