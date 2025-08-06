import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  className?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export function OptimizedImage({
  src,
  alt,
  fill = false,
  width,
  height,
  sizes = '100vw',
  priority = false,
  quality = 85,
  className = '',
  placeholder = 'empty',
  blurDataURL,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Determinar si usar imagen optimizada basado en el nombre del archivo
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('/optimized/')) {
      return originalSrc;
    }
    
    // Si es una imagen del directorio public, buscar versión optimizada
    if (originalSrc.startsWith('/') && !originalSrc.startsWith('/optimized/')) {
      const fileName = originalSrc.split('/').pop();
      const nameWithoutExt = fileName?.split('.')[0];
      const ext = fileName?.split('.').pop();
      
      if (nameWithoutExt && ext) {
        return `/optimized/${nameWithoutExt}-optimized.webp`;
      }
    }
    
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      className={`${className} ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'} transition-all duration-700 ease-out`}
      onLoadingComplete={() => setIsLoading(false)}
      {...props}
    />
  );
} 