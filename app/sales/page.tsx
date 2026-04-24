import React from "react";
import Image from "next/image";

const BABIES_BASE = "/2026%20Babies";

const wetherPhotos: { file: string; alt: string }[] = [
  { file: "boy_1.jpg", alt: "2026 wether kid" },
  { file: "boy_2.jpg", alt: "2026 wether kid" },
  { file: "boy_3.jpg", alt: "2026 wether kid" },
  { file: "boy_4.jpg", alt: "2026 wether kid" },
  { file: "boy_5.jpg", alt: "2026 wether kid" },
  { file: "boy_6.jpg", alt: "2026 wether kid" },
  { file: "dizzy_boy.jpg", alt: "Dizzy's boy, 2026 wether kid" },
];

const jewelBucklingPhotos: { file: string; alt: string }[] = [
  { file: "jewel_boy_1.jpg", alt: "Jewel buckling 1" },
  { file: "jewel_boy_2.jpg", alt: "Jewel buckling 2" },
  { file: "jewel_boy_3.jpg", alt: "Jewel buckling 3" },
  { file: "jewel_boy_3_2.jpg", alt: "Jewel buckling 3 alternate view" },
];

const Sales = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">For Sale & Breeding Schedule</h1>

      <section className="mb-12 md:mb-16 border-b border-sky-200 pb-10 md:pb-14">
        <h2 className="text-2xl font-bold text-center mb-2">2026 Wethers</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-2">
          We have <strong>12</strong> adorable, friendly bottle wethers available from this year&apos;s crop.
        </p>
        <p className="text-center text-gray-800 font-medium mb-6">
          <span className="mr-2">$100 each</span>
          <span className="text-gray-400">·</span>
          <span className="ml-2">two for $175</span>
        </p>
        <p className="text-center text-sm text-gray-600 mb-8">
          To reserve or ask questions, email{" "}
          <a href="mailto:farm@dreamdancinacres.com" className="text-blue-600 hover:text-blue-800">
            farm@dreamdancinacres.com
          </a>
          , or call/text us at <a href="tel:661-269-6161" className="text-blue-600 hover:text-blue-800">661-269-6161</a> (text preferred).
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {wetherPhotos.map(({ file, alt }) => (
            <div
              key={file}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md bg-sky-100"
            >
              <Image
                src={`${BABIES_BASE}/${file}`}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Available Goats</h2>
          <p className="mb-4">
            We have a limited number of Does bred each year, but we do accept reservations!
          </p>
          
          <h3 className="text-lg font-medium mb-2">Breeding Schedule</h3>
          <p className="mb-4">
            Our breeding season typically runs from September to December, with kids arriving from February to May.
          </p>
          
          <h3 className="text-lg font-medium mb-2">Reservation Process</h3>
          <p className="mb-4">
            To reserve a kid, please contact us early in the breeding season. A deposit is required to secure your reservation.
          </p>
          
          <h3 className="text-lg font-medium mb-2">Contact Us</h3>
          <p>
            For more information about available goats or to make a reservation, please reach out to us at:
            <br />
            <a href="mailto:contact@dreamdancin.com" className="text-blue-600 hover:text-blue-800">
              farm@dreamdancinacres.com
            </a>
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <Image
            src="/Cover.jpg"
            alt="2024 Babies lined up in their feeder"
            width={800}
            height={600}
            priority
            className="rounded-lg shadow-md"
          />
          <p className="text-sm text-gray-600 mt-2 text-center">
            2024 Babies lined up in their feeder
          </p>
        </div>
      </div>

      <section className="mt-12 md:mt-16 border-t border-sky-200 pt-10 md:pt-14">
        <h2 className="text-2xl font-bold text-center mb-2">2026 Bucklings</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-2">
          We have <strong>3</strong> bucklings out of Jewel available this year.
        </p>
        <p className="text-center text-gray-800 font-medium mb-6">$500 each</p>
        <div className="max-w-3xl mx-auto mb-8 bg-sky-50 rounded-lg p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-sky-900 mb-3">Parentage</h3>
          <div className="space-y-3 text-gray-700">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Dam</p>
              <p className="font-medium">Almar Acres HS Ima Jewel Thief *4 VEEV88</p>
              <a
                href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001805631"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                View Pedigree
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Sire</p>
              <p className="font-medium">Robin your Heart</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {jewelBucklingPhotos.map(({ file, alt }) => (
            <div
              key={file}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md bg-sky-100"
            >
              <Image
                src={`${BABIES_BASE}/${file}`}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sales;