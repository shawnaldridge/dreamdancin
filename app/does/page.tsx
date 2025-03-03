import React from "react";
import ThumbnailCarousel from "../components/carousel/carousel";

const jewelImages = [
  { src: '/jewel_1.jpg', alt: 'Jewel Image 1' },
  { src: '/jewel_2.jpg', alt: 'Jewel Image 2' },
  // Add more Jewel images as needed
];

const mistralImages = [
  { src: '/mistral_1.jpg', alt: 'Mistral Image 1' },
  { src: '/mistral_2.jpg', alt: 'Mistral Image 2' },
  // Add more Mistral images as needed
];

const reggieImages = [
  { src: '/reggie_1.jpg', alt: 'Reggie Image 1' },
  { src: '/reggie_2.jpg', alt: 'Reggie Image 2' },
  // Add more Reggie images as needed
];

const cherryImages = [
  { src: '/cherry_1.jpg', alt: 'Cherry Image 1' }
  // Add more Cherry images as needed
];

const dizzyImages = [
  { src: '/dizzy_1.jpg', alt: 'Dizzy Image 1' }
  // Add more Dizzy images as needed
];

const corrieImages = [
  { src: '/corrie_1.jpg', alt: 'Corrie Image 1' },
  { src: '/corrie_2.jpg', alt: 'Corrie Image 2' },
  // Add more Corrie images as needed
];

const fennelImages = [
  { src: '/fennel_1.jpg', alt: 'Fennel Image 1' },
  { src: '/fennel_2.jpg', alt: 'Fennel Image 2' },
  // Add more Fennel images as needed
];

const Does = () => {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">Jewel</h2>
        <ThumbnailCarousel 
          images={jewelImages}
          imageWidth={1000}
          imageHeight={500}
          thumbnailWidth={100}
          thumbnailHeight={50}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Mistral</h2>
        <p>
          ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002160966" target="_blank" rel="noopener noreferrer">https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002160966</a>
        </p>
        <ThumbnailCarousel 
          images={mistralImages}
          imageWidth={1000}
          imageHeight={500}
          thumbnailWidth={100}
          thumbnailHeight={50}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Corrie</h2>
        <p>
          {/* ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002160966" target="_blank" rel="noopener noreferrer">https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002160966</a> */}
        </p>
        <ThumbnailCarousel 
          images={corrieImages}
          imageWidth={1000}
          imageHeight={500}
          thumbnailWidth={100}
          thumbnailHeight={50}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Fennel</h2>
        <p>
          {/* ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002160966" target="_blank" rel="noopener noreferrer">https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002160966</a> */}
        </p>
        <ThumbnailCarousel 
          images={fennelImages}
          imageWidth={1000}
          imageHeight={500}
          thumbnailWidth={100}
          thumbnailHeight={50}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Cherry</h2>
        <p>
          {/* ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002160966" target="_blank" rel="noopener noreferrer">https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002160966</a> */}
        </p>
        <ThumbnailCarousel 
          images={cherryImages}
          imageWidth={1000}
          imageHeight={500}
          thumbnailWidth={100}
          thumbnailHeight={50}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Dizzy</h2>
        <p>
          {/* ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002160966" target="_blank" rel="noopener noreferrer">https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002160966</a> */}
        </p>
        <ThumbnailCarousel 
          images={dizzyImages}
          imageWidth={1000}
          imageHeight={500}
          thumbnailWidth={100}
          thumbnailHeight={50}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Reggie</h2>
        <p>
          {/* ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002160966" target="_blank" rel="noopener noreferrer">https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002160966</a> */}
        </p>
        <ThumbnailCarousel 
          images={reggieImages}
          imageWidth={1000}
          imageHeight={500}
          thumbnailWidth={100}
          thumbnailHeight={50}
        />
      </section>
    </div>
  );
};

export default Does;