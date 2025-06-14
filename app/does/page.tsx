import React from "react";
import ThumbnailCarousel from "../components/carousel/carousel";

const jewelImages = [
  { src: '/jewel_1.jpg', alt: 'Jewel at 2023 ADGA Nationals' },
  { src: '/jewel_2.jpg', alt: 'Jewel at 2023 ADGA Nationals' },
  // Add more Jewel images as needed
];

const mistralImages = [
  { src: '/mistral_1.jpg', alt: 'Mistral at 2023 ADGA Nationals' },
  { src: '/mistral_2.jpg', alt: 'Mistral at 2023 ADGA Nationals' },
  // Add more Mistral images as needed
];

const reggieImages = [
  { src: '/reggie_1.jpg', alt: 'Reggie in the barn' },
  { src: '/reggie_2.jpg', alt: 'Reggie in the barn' },
  // Add more Reggie images as needed
];

const cherryImages = [
  { src: '/cherry_1.jpg', alt: 'Cherry' }
  // Add more Cherry images as needed
];

const dizzyImages = [
  { src: '/dizzy_1.jpg', alt: 'Dizzy' }
  // Add more Dizzy images as needed
];

const corrieImages = [
  { src: '/corrie_1.jpg', alt: 'Corrie as a yearling FF at Jackson County Fair' },
  { src: '/corrie_2.jpg', alt: 'Corrie as a yearling FF at Jackson County Fair' },
  { src: '/corrie_2025_1.jpg', alt: 'Corrie as a two year old at NWODGA in 2025' },
  { src: '/corrie_2025_2.jpg', alt: 'Corrie as a two year old at NWODGA in 2025' },
  { src: '/corrie_2025_3.jpg', alt: 'Corrie as a two year old at NWODGA in 2025' },
  { src: '/corrie_2025_4.jpg', alt: 'Corrie as a two year old at NWODGA in 2025' },
  // Add more Corrie images as needed
];

const fennelImages = [
  { src: '/fennel_1.jpg', alt: 'Fennel' },
  { src: '/fennel_2.jpg', alt: 'Fennel' },
  // Add more Fennel images as needed
];

const calypsoImages = [
  { src: '/calypso_2025_1.jpg', alt: 'Calypso at NWODGA in 2025' },
  { src: '/calypso_2025_2.jpg', alt: 'Calypso at NWODGA in 2025' },
  { src: '/calypso_2025_3.jpg', alt: 'Calypso at NWODGA in 2025' },
  // Add more Calypso images as needed
];

const cassieImages = [
  { src: '/cassie_2025_1.jpg', alt: 'Cassie as a dry yearling at NWODGA in 2025' },
  { src: '/cassie_2025_2.jpg', alt: 'Cassie as a dry yearling at NWODGA in 2025' },
  { src: '/cassie_2025_3.jpg', alt: 'Cassie as a dry yearling at NWODGA in 2025' },
  { src: '/cassie_2025_4.jpg', alt: 'Cassie as a dry yearling at NWODGA in 2025' },
  // Add more Fennel images as needed
];

const khazriImages = [
  { src: '/khazri_2025_1.jpg', alt: 'Khazri as a dry yearling at NWODGA in 2025' },
  // Add more Fennel images as needed
];

const Does = () => {
  return (
    <div className="space-y-12 p-4">

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="carousel-wrapper">
            <ThumbnailCarousel 
              images={cassieImages}
              imageWidth={400}
              imageHeight={300}
              thumbnailWidth={60}
              thumbnailHeight={45}
            />
          </div>
          <div className="details-wrapper">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Dream Dancin&apos; M Cassia</h3>
              <p className="mb-2">ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002378860" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Pedigree
                </a></p>
              <p className="mb-2">Date of Birth: 4/3/2024</p>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Sire: Oak Apple Marduk</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002352761" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Dam: Dream Dancin&apos; Coriander</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002294639" 
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
                  <li>Junior Grand Champion at NWODGA in 2025 as a dry yearling</li>
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
              images={khazriImages}
              imageWidth={400}
              imageHeight={300}
              thumbnailWidth={60}
              thumbnailHeight={45}
            />
          </div>
          <div className="details-wrapper">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Dream Dancin&apos; M Khazri</h3>
              <p className="mb-2">ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002378862" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Pedigree
                </a></p>
              <p className="mb-2">Date of Birth: 4/14/2024</p>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Sire: Oak Apple Marduk</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002352761" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Dam: Iridescent&apos;s Mistral</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002160966" 
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
              images={jewelImages}
              imageWidth={400}
              imageHeight={300}
              thumbnailWidth={60}
              thumbnailHeight={45}
            />
          </div>
          <div className="details-wrapper">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Almar Acres HS Ima Jewel Thief *4 VEEV88</h3>
              <p className="mb-2">ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001805631" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Pedigree
                </a></p>
              <p className="mb-2">Date of Birth: 3/16/2016</p>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Sire: Dragonfly HB Holy Smokes!</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001667092" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Dam: Almar Acres AC Ima Drama Queen</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001624475" 
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
              images={calypsoImages}
              imageWidth={400}
              imageHeight={300}
              thumbnailWidth={60}
              thumbnailHeight={45}
            />
          </div>
          <div className="details-wrapper">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Drean Dancin&apos; RRF Calypso</h3>
              <p className="mb-2">ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002294673" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Pedigree
                </a></p>
              <p className="mb-2">Date of Birth: 3/30/2023</p>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Sire: Iridescent&apos;s Ruby Red Fiery</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002161643" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Dam: Almar Acres HS Ima Jewel Thief *4 VEEV88</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001805631" 
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
              images={mistralImages}
              imageWidth={400}
              imageHeight={300}
              thumbnailWidth={60}
              thumbnailHeight={45}
            />
          </div>
          <div className="details-wrapper">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Iridescent&apos;s Mistral</h3>
              <p className="mb-2">
                ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002160966" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Pedigree
                </a>
              </p>
              <p className="mb-2">Date of Birth:  3/24/2021</p>

              <div className="mb-4">
                <p className="mb-1 font-medium">Sire: Wild in Wild D Olympus</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002089228" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>

              <div className="mb-4">
                <p className="mb-1 font-medium">Dam: Sans Gene BDS Sirocco</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002037458" 
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
                  <li>18th in ADGA National Show 2023 in 2YO class out of 80+ goats</li>
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
              images={corrieImages}
              imageWidth={400}
              imageHeight={300}
              thumbnailWidth={60}
              thumbnailHeight={45}
            />
          </div>
          <div className="details-wrapper">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Dream Dancin&apos; Coriander</h3>
              <p className="mb-2">ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002294639" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Pedigree
                </a></p>
              <p className="mb-2">Date of Birth: 3/11/2023 </p>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Sire: Iridescent&apos;s Ruby Red Fiery</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002161643" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Dam: Flying Feets CB Reglisse</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002012414" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
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
              <h3 className="text-xl font-semibold mb-3">Dream Dancin&apos; Fennel</h3>
              <p className="mb-2">ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002231602" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Pedigree
                </a></p>
              <p className="mb-2">Date of Birth:3/30/2022 </p>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Sire: Storybrooks Kristoff</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001732647" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Dam: Flying Feets CB Reglisse</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002012414" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
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
              <h3 className="text-xl font-semibold mb-3">Dream Dancin&apos; Cherry Bomb</h3>
              <p className="mb-2">ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002166113" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Pedigree
                </a></p>
              <p className="mb-2">Date of Birth: 4/7/2021 </p>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Sire: VVR AR Dynamite</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001980532" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Dam: Flying Feets CB Reglisse</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002012414" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
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
              <h3 className="text-xl font-semibold mb-3">Dream Dancin&apos; Discord</h3>
              <p className="mb-2">ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002166114" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Pedigree
                </a></p>
              <p className="mb-2">Date of Birth: 4/14/2021 </p>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Sire: VVR AR Dynamite</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001980532" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Dam: Freedom Ranch Harmony</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001770611" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
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
              <h3 className="text-xl font-semibold mb-3">Flying Feets Reglisse</h3>
              <p className="mb-2">ADGA Info: <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002012414" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800">
                  View Pedigree
                </a></p>
              <p className="mb-2">Date of Birth: 1/18/2019 </p>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Sire: Sans Gene GT Creme Brulee</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001690768" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
              
              <div className="mb-4">
                <p className="mb-1 font-medium">Dam: Alethia DJ Rejoice</p>
                <p className="ml-4">
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001588063" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800">
                    View Pedigree
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Does;