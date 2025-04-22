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
    <div className="space-y-12 p-4">
      <section>
        <h2 className="text-2xl font-bold mb-4">Jewel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="carousel-wrapper">
            <ThumbnailCarousel 
              images={jewelImages}
              imageWidth={400}
              imageHeight={300}
              thumbnailWidth={60}
              thumbnailHeight={45}
            />
          </div>
          <div className="details-wrapper">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">About Jewel</h3>
              <p className="mb-2">Registration: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001805631" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
              <p className="mb-2">Date of Birth:3/16/2016</p>
              <p className="mb-2">Sire: Dragonfly HB Holy Smokes! </p>
              <p><a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001667092" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
              <p className="mb-2">Dam: Almar Acres AC Ima Drama Queen</p>
              <p><a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001624475" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
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
        <h2 className="text-2xl font-bold mb-4">Mistral</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="carousel-wrapper">
            <ThumbnailCarousel 
              images={mistralImages}
              imageWidth={400}
              imageHeight={300}
              thumbnailWidth={60}
              thumbnailHeight={45}
            />
          </div>
          <div className="details-wrapper">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">About Mistral</h3>
              <p className="mb-2">
                ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002160966" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a>
              </p>
              <p className="mb-2">Date of Birth:  3/24/2021</p>

              <p className="mb-2">Sire: Wild in Wild D Olympus </p>
              <p><a href=" https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002089228" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>

              <p className="mb-2">Dam: Sans Gene BDS Sirocco</p>
              <p><a href=" https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002037458" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Notable Achievements:</h4>
                <ul className="list-disc list-inside">
                  <li>18th in ADGA National Show 2023 in 2YO class out of 80+ goats</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Corrie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="carousel-wrapper">
            <ThumbnailCarousel 
              images={corrieImages}
              imageWidth={400}
              imageHeight={300}
              thumbnailWidth={60}
              thumbnailHeight={45}
            />
          </div>
          <div className="details-wrapper">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">About Corrie</h3>
              <p className="mb-2">Registration: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002294639" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
              <p className="mb-2">Date of Birth: 3/11/2023 </p>
              <p className="mb-2">Sire: Iridescent's Ruby Red Fiery</p>
              <p><a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002161643" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
              <p className="mb-2">Dam: Flying Feets CB Reglisse</p>
              <p><a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002012414" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
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
        <h2 className="text-2xl font-bold mb-4">Fennel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="carousel-wrapper">
            <ThumbnailCarousel 
              images={fennelImages}
              imageWidth={400}
              imageHeight={300}
              thumbnailWidth={60}
              thumbnailHeight={45}
            />
          </div>
          <div className="details-wrapper">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">About Fennel</h3>
              <p className="mb-2">Registration: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002231602" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
              <p className="mb-2">Date of Birth:3/30/2022 </p>
              <p className="mb-2">Sire: Storybrooks Kristoff</p>
              <p><a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001732647" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
              <p className="mb-2">Dam: Flying Feets CB Reglisse</p>
              <p><a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002012414" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
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
        <h2 className="text-2xl font-bold mb-4">Cherry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="carousel-wrapper">
            <ThumbnailCarousel 
              images={cherryImages}
              imageWidth={400}
              imageHeight={300}
              thumbnailWidth={60}
              thumbnailHeight={45}
            />
          </div>
          <div className="details-wrapper">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">About Cherry</h3>
              <p className="mb-2">Registration: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002166113" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
              <p className="mb-2">Date of Birth: 4/7/2021 </p>
              <p className="mb-2">Sire: VVR AR Dynamite</p>
              <p><a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001980532" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
                <p className="mb-2">Dam: Flying Feets CB Reglisse</p>
              <p><a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002012414" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
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
        <h2 className="text-2xl font-bold mb-4">Dizzy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="carousel-wrapper">
            <ThumbnailCarousel 
              images={dizzyImages}
              imageWidth={400}
              imageHeight={300}
              thumbnailWidth={60}
              thumbnailHeight={45}
            />
          </div>
          <div className="details-wrapper">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">About Dizzy</h3>
              <p className="mb-2">Registration: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002166114" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
              <p className="mb-2">Date of Birth: 4/14/2021 </p>
              <p className="mb-2">Sire: VVR AR Dynamite</p>
              <p><a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001980532" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
              <p className="mb-2">Dam: Freedom Ranch Harmony</p>
              <p><a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001770611" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
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
        <h2 className="text-2xl font-bold mb-4">Reggie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="carousel-wrapper">
            <ThumbnailCarousel 
              images={reggieImages}
              imageWidth={400}
              imageHeight={300}
              thumbnailWidth={60}
              thumbnailHeight={45}
            />
          </div>
          <div className="details-wrapper">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">About Reggie</h3>
              <p className="mb-2">Registration: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002012414" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
              <p className="mb-2">Date of Birth: 1/18/2019 </p>
              <p className="mb-2">Sire: Sans Gene GT Creme Brulee</p>
              <p><a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001690768" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
              <p className="mb-2">Dam: Alethia DJ Rejoice</p>
              <p><a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001588063" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Registration
                </a></p>
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

export default Does;