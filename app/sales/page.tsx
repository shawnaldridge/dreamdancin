import React from "react";
import Image from "next/image";

// Literal space in the folder name — writing `%20` here is double-encoded by `next/image` and breaks photos.
const BABIES_BASE = "/2026 Babies";

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

const jewelDamPhotos: { src: string; alt: string }[] = [
  { src: "/jewel_1.jpg", alt: "Jewel at 2023 ADGA Nationals" },
  { src: "/jewel_2.jpg", alt: "Jewel at 2023 ADGA Nationals" },
];

const nettlePhotos: { file: string; alt: string }[] = [
  { file: "nettle_1.jpg", alt: "ELFIN ACRES I NETTLE" },
  { file: "nettle_2.jpg", alt: "ELFIN ACRES I NETTLE" },
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
          We have <strong>3</strong> beautiful bucklings out of Jewel available this year. We believe they would make an excellent addition to the genetics of your herd.
        </p>
        <p className="text-center text-gray-800 font-medium mb-6">$500 each</p>
        <div className="max-w-3xl mx-auto mb-8 bg-sky-50 rounded-lg p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-sky-900 mb-4">Parentage</h3>
          <div className="space-y-5 text-gray-700">
            <div className="rounded-xl border border-sky-200 bg-white p-4 md:p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Dam</p>
              <p className="text-lg font-semibold text-gray-900 mt-1 leading-snug">
                Almar Acres HS Ima Jewel Thief *4 VEEV88
              </p>
              <a
                href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D001805631"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View pedigree →
              </a>
              <div className="mt-4 pt-4 border-t border-sky-100">
                <p className="text-xs font-medium text-gray-600 mb-2">
                  Photos of dam (Jewel)
                </p>
                <div className="grid grid-cols-2 gap-2 max-w-md">
                  {jewelDamPhotos.map(({ src, alt }) => (
                    <Image
                      key={src}
                      src={src}
                      alt={alt}
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-md object-cover border border-sky-200/80 bg-sky-100"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-sky-200 bg-white p-4 md:p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Sire</p>
              <p className="text-lg font-semibold text-gray-900 mt-1 leading-snug">
                Elfin Acres Robbin Your Hearts
              </p>
              <a
                href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002404233"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View pedigree →
              </a>
              <div className="mt-4 pt-4 border-t border-sky-100">
                <p className="text-xs font-medium text-gray-600 mb-2">
                  Photo of sire (Robbin)
                </p>
                <div className="max-w-md">
                  <Image
                    src={`${BABIES_BASE}/robbin_1.jpg`}
                    alt="Elfin Acres Robbin Your Hearts"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-md object-cover border border-sky-200/80 bg-sky-100"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-sky-200 bg-white p-4 md:p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Sire&apos;s dam
              </p>
              <p className="text-lg font-semibold text-gray-900 mt-1 leading-snug">
                Elfin Acres I Nettle
              </p>
              <a
                href="https://genetics.adga.org/GoatDetail.aspx?RegNumber=D002325141"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View pedigree →
              </a>
              <div className="mt-4 pt-4 border-t border-sky-100">
                <p className="text-xs font-medium text-gray-600 mb-2">
                  Photos of sire&apos;s dam (Nettle)
                </p>
                <div className="grid grid-cols-2 gap-2 max-w-md">
                  {nettlePhotos.map(({ file, alt }) => (
                    <Image
                      key={file}
                      src={`${BABIES_BASE}/${file}`}
                      alt={alt}
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-md object-cover border border-sky-200/80 bg-sky-100"
                    />
                  ))}
                </div>
              </div>
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