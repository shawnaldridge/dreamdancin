import React from "react";
import Image from "next/image";

const Sales = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">For Sale & Breeding Schedule</h1>
      
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
    </div>
  );
};

export default Sales;