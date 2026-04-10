import React from "react";
import ThumbnailCarousel from "../components/carousel/carousel";

const jewelImages = [
  { src: '/jewel_1.jpg', alt: 'Jewel at 2023 ADGA Nationals' },
  { src: '/jewel_2.jpg', alt: 'Jewel at 2023 ADGA Nationals' },
];


const reggieImages = [
  { src: '/reggie_1.jpg', alt: 'Reggie in the barn' },
  { src: '/reggie_2.jpg', alt: 'Reggie in the barn' },
];

const cherryImages = [
  { src: '/cherry_1.jpg', alt: 'Cherry' },
];

const dizzyImages = [
  { src: '/dizzy_1.jpg', alt: 'Dizzy' },
];

const corrieImages = [
  { src: '/corrie_1.jpg', alt: 'Corrie as a yearling FF at Jackson County Fair' },
  { src: '/corrie_2.jpg', alt: 'Corrie as a yearling FF at Jackson County Fair' },
  { src: '/corrie_2025_1.jpg', alt: 'Corrie as a two year old at NWODGA in 2025' },
  { src: '/corrie_2025_2.jpg', alt: 'Corrie as a two year old at NWODGA in 2025' },
  { src: '/corrie_2025_3.jpg', alt: 'Corrie as a two year old at NWODGA in 2025' },
  { src: '/corrie_2025_4.jpg', alt: 'Corrie as a two year old at NWODGA in 2025' },
];

const fennelImages = [
  { src: '/fennel_1.jpg', alt: 'Fennel' },
  { src: '/fennel_2.jpg', alt: 'Fennel' },
];

const calypsoImages = [
  { src: '/calypso_2025_1.jpg', alt: 'Calypso at NWODGA in 2025' },
  { src: '/calypso_2025_2.jpg', alt: 'Calypso at NWODGA in 2025' },
  { src: '/calypso_2025_3.jpg', alt: 'Calypso at NWODGA in 2025' },
];

const cassieImages = [
  { src: '/cassie_2025_1.jpg', alt: 'Cassie as a dry yearling at NWODGA in 2025' },
  { src: '/cassie_2025_2.jpg', alt: 'Cassie as a dry yearling at NWODGA in 2025' },
  { src: '/cassie_2025_3.jpg', alt: 'Cassie as a dry yearling at NWODGA in 2025' },
  { src: '/cassie_2025_4.jpg', alt: 'Cassie as a dry yearling at NWODGA in 2025' },
];


const Does = () => {
  return (
    <main className="min-h-screen">

      {/* Page Header */}
      <section className="bg-emerald-50 py-10 md:py-14 border-b border-emerald-100">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-800">Our Does</h1>
          <p className="mt-2 text-stone-600 text-lg max-w-xl">
            ADGA-registered Nigerian Dwarf does — the foundation of our herd.
          </p>
        </div>
      </section>

      {/* Cassie */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <ThumbnailCarousel images={cassieImages} imageWidth={400} imageHeight={300} thumbnailWidth={60} thumbnailHeight={45} />
            <div className="bg-white rounded-xl shadow-md ring-1 ring-stone-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-1">Dream Dancin&apos; M Cassia</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-500 mb-5 pb-5 border-b border-stone-100">
                <span>Born 4/3/2024</span>
                <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002378860" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">ADGA Pedigree →</a>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Sire</p>
                  <p className="text-stone-700 font-medium">Oak Apple Marduk</p>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002352761" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm">View Pedigree →</a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Dam</p>
                  <p className="text-stone-700 font-medium">Dream Dancin&apos; Coriander</p>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002294639" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm">View Pedigree →</a>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-stone-100">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-2">Notable Achievements</p>
                <ul className="space-y-1">
                  <li className="flex gap-2 text-sm text-stone-700">
                    <span className="text-amber-500 mt-0.5 shrink-0">★</span>
                    <span>Junior Grand Champion at NWODGA in 2025 as a dry yearling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-stone-100" />

      {/* Jewel */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <ThumbnailCarousel images={jewelImages} imageWidth={400} imageHeight={300} thumbnailWidth={60} thumbnailHeight={45} />
            <div className="bg-white rounded-xl shadow-md ring-1 ring-stone-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-1">Almar Acres HS Ima Jewel Thief *4 VEEV88</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-500 mb-5 pb-5 border-b border-stone-100">
                <span>Born 3/16/2016</span>
                <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001805631" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">ADGA Pedigree →</a>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Sire</p>
                  <p className="text-stone-700 font-medium">Dragonfly HB Holy Smokes!</p>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001667092" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm">View Pedigree →</a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Dam</p>
                  <p className="text-stone-700 font-medium">Almar Acres AC Ima Drama Queen</p>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001624475" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm">View Pedigree →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-stone-100" />

      {/* Calypso */}
      <section className="bg-stone-50 py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <ThumbnailCarousel images={calypsoImages} imageWidth={400} imageHeight={300} thumbnailWidth={60} thumbnailHeight={45} />
            <div className="bg-white rounded-xl shadow-md ring-1 ring-stone-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-1">Dream Dancin&apos; RRF Calypso</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-500 mb-5 pb-5 border-b border-stone-100">
                <span>Born 3/30/2023</span>
                <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002294673" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">ADGA Pedigree →</a>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Sire</p>
                  <p className="text-stone-700 font-medium">Iridescent&apos;s Ruby Red Fiery</p>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002161643" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm">View Pedigree →</a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Dam</p>
                  <p className="text-stone-700 font-medium">Almar Acres HS Ima Jewel Thief *4 VEEV88</p>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001805631" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm">View Pedigree →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-stone-100" />

      {/* Coriander */}
      <section className="bg-stone-50 py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <ThumbnailCarousel images={corrieImages} imageWidth={400} imageHeight={300} thumbnailWidth={60} thumbnailHeight={45} />
            <div className="bg-white rounded-xl shadow-md ring-1 ring-stone-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-1">Dream Dancin&apos; Coriander</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-500 mb-5 pb-5 border-b border-stone-100">
                <span>Born 3/11/2023</span>
                <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002294639" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">ADGA Pedigree →</a>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Sire</p>
                  <p className="text-stone-700 font-medium">Iridescent&apos;s Ruby Red Fiery</p>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002161643" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm">View Pedigree →</a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Dam</p>
                  <p className="text-stone-700 font-medium">Flying Feets CB Reglisse</p>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002012414" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm">View Pedigree →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-stone-100" />

      {/* Fennel */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <ThumbnailCarousel images={fennelImages} imageWidth={400} imageHeight={300} thumbnailWidth={60} thumbnailHeight={45} />
            <div className="bg-white rounded-xl shadow-md ring-1 ring-stone-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-1">Dream Dancin&apos; Fennel</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-500 mb-5 pb-5 border-b border-stone-100">
                <span>Born 3/30/2022</span>
                <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002231602" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">ADGA Pedigree →</a>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Sire</p>
                  <p className="text-stone-700 font-medium">Storybrooks Kristoff</p>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001732647" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm">View Pedigree →</a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Dam</p>
                  <p className="text-stone-700 font-medium">Flying Feets CB Reglisse</p>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002012414" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm">View Pedigree →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reference Does */}
      <section className="bg-stone-100 py-10 md:py-14 border-t-2 border-stone-200">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-emerald-800">Reference Does</h2>
            <p className="mt-1 text-stone-500 text-sm max-w-xl">
              Does retained primarily for their genetics and breeding value.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Reglisse */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-stone-100 overflow-hidden">
              <ThumbnailCarousel images={reggieImages} imageWidth={300} imageHeight={225} thumbnailWidth={44} thumbnailHeight={33} />
              <div className="p-4">
                <h3 className="text-base font-semibold text-emerald-800 mb-1">Flying Feets Reglisse</h3>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-stone-500 mb-3 pb-3 border-b border-stone-100">
                  <span>Born 1/18/2019</span>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002012414" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">ADGA Pedigree →</a>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Sire</p>
                    <p className="text-sm text-stone-700 font-medium">Sans Gene GT Creme Brulee</p>
                    <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001690768" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-xs">View Pedigree →</a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Dam</p>
                    <p className="text-sm text-stone-700 font-medium">Alethia DJ Rejoice</p>
                    <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001588063" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-xs">View Pedigree →</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Cherry Bomb */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-stone-100 overflow-hidden">
              <ThumbnailCarousel images={cherryImages} imageWidth={300} imageHeight={225} thumbnailWidth={44} thumbnailHeight={33} />
              <div className="p-4">
                <h3 className="text-base font-semibold text-emerald-800 mb-1">Dream Dancin&apos; Cherry Bomb</h3>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-stone-500 mb-3 pb-3 border-b border-stone-100">
                  <span>Born 4/7/2021</span>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002166113" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">ADGA Pedigree →</a>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Sire</p>
                    <p className="text-sm text-stone-700 font-medium">VVR AR Dynamite</p>
                    <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001980532" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-xs">View Pedigree →</a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Dam</p>
                    <p className="text-sm text-stone-700 font-medium">Flying Feets CB Reglisse</p>
                    <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002012414" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-xs">View Pedigree →</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Discord */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-stone-100 overflow-hidden">
              <ThumbnailCarousel images={dizzyImages} imageWidth={300} imageHeight={225} thumbnailWidth={44} thumbnailHeight={33} />
              <div className="p-4">
                <h3 className="text-base font-semibold text-emerald-800 mb-1">Dream Dancin&apos; Discord</h3>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-stone-500 mb-3 pb-3 border-b border-stone-100">
                  <span>Born 4/14/2021</span>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002166114" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">ADGA Pedigree →</a>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Sire</p>
                    <p className="text-sm text-stone-700 font-medium">VVR AR Dynamite</p>
                    <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001980532" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-xs">View Pedigree →</a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Dam</p>
                    <p className="text-sm text-stone-700 font-medium">Freedom Ranch Harmony</p>
                    <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001770611" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-xs">View Pedigree →</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Does;
