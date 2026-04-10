import React from "react";
import ThumbnailCarousel from "../components/carousel/carousel";

const dukeImages = [
  { src: '/duke_1.jpg', alt: 'Marduk - Duke around the barn' },
  { src: '/duke_2.jpg', alt: 'Marduk - Duke around the barn' },
];

const furyImages = [
  { src: '/chip_1.jpg', alt: 'Fury Image 1' },
];

const gobiImages = [
  { src: '/gobi_1.jpg', alt: 'Gobi' },
];

const lockeImages = [
  { src: '/locke_1.jpg', alt: 'Locke' },
];

const Bucks = () => {
  return (
    <main className="min-h-screen">

      {/* Page Header */}
      <section className="bg-emerald-50 py-10 md:py-14 border-b border-emerald-100">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-800">Our Bucks</h1>
          <p className="mt-2 text-stone-600 text-lg max-w-xl">
            ADGA-registered Nigerian Dwarf bucks — the sires behind our herd.
          </p>
        </div>
      </section>

      {/* Ruby Red Fiery */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <ThumbnailCarousel images={furyImages} imageWidth={400} imageHeight={300} thumbnailWidth={60} thumbnailHeight={45} />
            <div className="bg-white rounded-xl shadow-md ring-1 ring-stone-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-1">Iridescent&apos;s Ruby Red Fiery</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-500 mb-5 pb-5 border-b border-stone-100">
                <span>Born 3/9/2021</span>
                <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002161643" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">ADGA Pedigree →</a>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Sire</p>
                  <p className="text-stone-700 font-medium">R Serenity WTM Rudy Valentino</p>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002010636" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm">View Pedigree →</a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Dam</p>
                  <p className="text-stone-700 font-medium">Diji Farm SGW Greta Garbo</p>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001639472" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm">View Pedigree →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-stone-100" />

      {/* Gobi */}
      <section className="bg-stone-50 py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <ThumbnailCarousel images={gobiImages} imageWidth={400} imageHeight={300} thumbnailWidth={60} thumbnailHeight={45} />
            <div className="bg-white rounded-xl shadow-md ring-1 ring-stone-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-1">Gobi</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-500 mb-5 pb-5 border-b border-stone-100">
                <span></span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Sire</p>
                  <p className="text-stone-700 font-medium"></p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Dam</p>
                  <p className="text-stone-700 font-medium"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-stone-100" />

      {/* Locke */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <ThumbnailCarousel images={lockeImages} imageWidth={400} imageHeight={300} thumbnailWidth={60} thumbnailHeight={45} />
            <div className="bg-white rounded-xl shadow-md ring-1 ring-stone-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-1">Locke</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-500 mb-5 pb-5 border-b border-stone-100">
                <span></span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Sire</p>
                  <p className="text-stone-700 font-medium"></p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Dam</p>
                  <p className="text-stone-700 font-medium"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reference Bucks */}
      <section className="bg-stone-50 py-10 md:py-14 border-t border-stone-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-emerald-800 mb-1">Reference Bucks</h2>
          <p className="text-stone-500 text-sm mb-10">Bucks no longer on the property whose genetics are represented in our herd.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <ThumbnailCarousel images={dukeImages} imageWidth={400} imageHeight={300} thumbnailWidth={60} thumbnailHeight={45} />
            <div className="bg-white rounded-xl shadow-md ring-1 ring-stone-100 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-emerald-800 mb-1">Oak Apple Marduk</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-500 mb-5 pb-5 border-b border-stone-100">
                <span>Born 4/16/2023</span>
                <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002352761" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">ADGA Pedigree →</a>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Sire</p>
                  <p className="text-stone-700 font-medium">Oak Apple Rondo</p>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001900258" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm">View Pedigree →</a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-0.5">Dam</p>
                  <p className="text-stone-700 font-medium">Oak Apple Themis</p>
                  <a href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002072034" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm">View Pedigree →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Bucks;
