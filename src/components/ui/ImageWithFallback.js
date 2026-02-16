'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const ImageWithFallback = ({ src, fallbackSrc = '/default.jpg', alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  // If dimensions are missing, fallback to <img> to prevent Next.js crash
  // We should progressively add width/height to all components to benefit from next/image
  const hasDimensions = (props.width && props.height) || props.fill;

  if (!hasDimensions) {
    return (
      <img
        {...props}
        src={imgSrc || fallbackSrc}
        alt={alt || ''}
        onError={() => {
          setImgSrc(fallbackSrc);
        }}
      />
    );
  }

  return (
    <Image
      {...props}
      src={imgSrc || fallbackSrc}
      alt={alt || ''}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;
