import { useState } from 'react';

interface ArtisanImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ArtisanImage({ src, alt, className = '' }: ArtisanImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-surface-container-high via-surface-container to-primary-fixed/40 text-primary/70 p-4 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="material-symbols-outlined text-3xl mb-1 text-secondary">spa</span>
        <span className="font-serif text-sm text-primary line-clamp-2">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
      loading="lazy"
    />
  );
}
