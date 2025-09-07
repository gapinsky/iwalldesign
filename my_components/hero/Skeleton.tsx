"use client";

import Image from "next/image";
import { useState } from "react";

export function ImgWithSkeleton(props: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  className?: string;
}) {
  const {
    src,
    alt,
    sizes,
    priority,
    loading,
    className = "object-cover",
  } = props;
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div
        className={`absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-300 ${
          loaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-hidden="true"
      />
      <Image
        src={src}
        alt={alt}
        fill={true}
        sizes={sizes}
        priority={priority === true}
        loading={loading}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
