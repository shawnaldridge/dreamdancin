"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';
import '../../embla.css';

interface CarouselImage {
  src: string;
  alt?: string;
}

interface ThumbnailCarouselProps {
  images: CarouselImage[];
  imageWidth?: number;
  imageHeight?: number;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
}

const ThumbnailCarousel = ({
  images,
  imageWidth = 800,
  imageHeight = 400,
  thumbnailWidth = 80,
  thumbnailHeight = 40,
}: ThumbnailCarouselProps) => {
  const emblaRef = useRef(null);
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);

  useEffect(() => {
    if (emblaRef.current) {
      const emblaInstance = EmblaCarousel(emblaRef.current, { loop: true });
      setEmbla(emblaInstance as any); // Type assertion to fix argument type mismatch
      return () => emblaInstance.destroy();
    }
  }, []);

  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();

  return (
    <div className="carousel-container relative flex flex-col items-center">
      <div className="carousel relative w-full">
        <button
          onClick={scrollPrev}
          className="prevButton absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <div ref={emblaRef} className="embla">
          <div className="embla__container">
            {images.map((image, index) => (
              <div key={index} className="embla__slide">
                <Image
                  src={image.src}
                  alt={image.alt || `Slide ${index + 1}`}
                  width={imageWidth}
                  height={imageHeight}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollNext}
          className="nextButton absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
      <div className="embla-thumbnail flex flex-row gap-2 mt-4 justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="thumbnail cursor-pointer hover:opacity-75 transition-opacity"
            onClick={() => embla && embla.scrollTo(index)}
          >
            <Image
              src={image.src}
              alt={image.alt || `Thumbnail ${index + 1}`}
              width={thumbnailWidth}
              height={thumbnailHeight}
              className="rounded-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailCarousel;
