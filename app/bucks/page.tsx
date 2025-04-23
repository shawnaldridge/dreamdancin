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

const furyImages = [
  { src: '/chip_1.jpg', alt: 'Fury Image 1' }
  // Add more Fury images as needed
];

const Bucks = () => {
  return (
    <div className="space-y-12 p-4">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="carousel-wrapper">
            <ThumbnailCarousel 
              images={chipImages}
              imageWidth={400}
              imageHeight={300}
              thumbnailWidth={60}
              thumbnailHeight={45}
            />
          </div>
          <div className="details-wrapper">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Four Cedars AL Chipotle</h3>
              <p className="mb-2">ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002245050" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Pedigree
                </a></p>
              <p className="mb-2">Date of Birth: 4/16/2022</p>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Sire: Sugar Moon NS Alejandro</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001803399" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Dam: Four Cedars EB Lacy Nutmeg</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001956391" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Notable Achievements:</h4>
                <ul className="list-disc list-inside">
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="carousel-wrapper">
            <ThumbnailCarousel 
              images={dukeImages}
              imageWidth={400}
              imageHeight={300}
              thumbnailWidth={60}
              thumbnailHeight={45}
            />
          </div>
          <div className="details-wrapper">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Oak Apple Marduk</h3>
              <p className="mb-2">ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002352761" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Pedigree
                </a></p>
              <p className="mb-2">Date of Birth: 4/16/2023</p>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Sire: Oak Apple Rondo</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001900258" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Dam: Oak Apple Themis</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002072034" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Notable Achievements:</h4>
                <ul className="list-disc list-inside">
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="carousel-wrapper">
            <ThumbnailCarousel 
              images={furyImages}
              imageWidth={400}
              imageHeight={300}
              thumbnailWidth={60}
              thumbnailHeight={45}
            />
          </div>
          <div className="details-wrapper">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3"> Iridescent&apos;s Ruby Red Fiery</h3>
              <p className="mb-2">ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002161643" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Pedigree
                </a></p>
              <p className="mb-2">Date of Birth: 3/9/2021</p>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Sire: R Serenity WTM Rudy Valentino</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002010636" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Dam: Diji Farm SGW Greta Garbo</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001639472" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Notable Achievements:</h4>
                <ul className="list-disc list-inside">
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bucks;