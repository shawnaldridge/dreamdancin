import React from "react";
import ThumbnailCarousel from "../components/carousel/carousel";

const chipImages = [
  { src: '/chip_1.jpg', alt: 'Chip Image 1' }
  // Add more Chip images as needed
];

const dukeImages = [
  { src: '/duke_1.jpg', alt: 'Duke Image 1' }
  // Add more Duke images as needed
];

const Bucks = () => {
  return (
    <div className="space-y-12 p-4">
      <section>
        <h2 className="text-2xl font-bold mb-4">Chip</h2>
        <ThumbnailCarousel images={chipImages} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Duke</h2>
        <ThumbnailCarousel images={dukeImages} />
      </section>
    </div>
  );
};

export default Bucks;