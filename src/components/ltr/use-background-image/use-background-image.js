// useBackgroundImageLoader.js
import { useEffect } from 'react';

export function useBackgroundImageLoader() {
  useEffect(() => {
    const elements = document.querySelectorAll('.bg-img');
    elements.forEach((element) => {
      const imageUrl = element.getAttribute('data-image-src');
      if (imageUrl) {
        element.style.backgroundImage = `url(${imageUrl})`;
      }
    });
  }, []);
}