import React from "react";

const Poultry = () => {
  return (
    <main className="min-h-screen">

      {/* Page Header */}
      <section className="bg-emerald-50 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
            Our Poultry
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We raise heritage and specialty poultry breeds with a focus on quality genetics and
            thoughtful husbandry. Raised on locally-grown Willamette Valley feed alongside our goat herd.
          </p>
          <p className="mt-4 text-gray-700">
            To inquire about availability or place a reservation, contact us at{" "}
            <a href="mailto:farm@dreamdancinacres.com" className="text-emerald-600 hover:text-emerald-800 font-medium">
              farm@dreamdancinacres.com
            </a>
          </p>
        </div>
      </section>

      {/* Coturnix Quail */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-3">
            Coturnix Quail
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Hardy, productive, and fast-maturing — our Coturnix quail are raised on a locally-grown,
            Willamette Valley diet. The difference in egg and meat quality is something you&apos;ll notice
            immediately.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Eating Eggs</h3>
              <p className="text-gray-700">
                Fresh quail eggs sold by the dozen. Rich in flavor and packed with nutrition —
                perfect for culinary use or a daily wholesome snack.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Hatching Eggs</h3>
              <p className="text-gray-700">
                Fertile hatching eggs from our healthy breeding flock. Available in limited
                quantities — contact us for current availability and pricing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Chicks</h3>
              <p className="text-gray-700">
                Coturnix chicks available seasonally. Straight-run or sexed depending on
                availability. Contact us to get on the wait list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* American Bresse */}
      <section className="bg-emerald-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-3">
            American Bresse
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            The American cousin of the legendary French Bresse — renowned for exceptional meat
            quality, good egg production, and a calm, docile temperament. An outstanding dual-purpose
            breed for the homestead or small farm.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Hatching Eggs</h3>
              <p className="text-gray-700">
                Fertile hatching eggs from our quality American Bresse flock. Sold in sets —
                contact us for pricing and seasonal availability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Chicks</h3>
              <p className="text-gray-700">
                Day-old and started American Bresse chicks available seasonally. Reservations
                encouraged — quantities are limited each year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Narragansett Heritage Turkey */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-3">
            Narragansett Heritage Turkey
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            One of America&apos;s most historic turkey breeds — calm, forage-savvy, and prized for
            their rich, full-flavored meat. We are proud to help preserve this beautiful heritage
            breed right here in the Willamette Valley.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Hatching Eggs</h3>
              <p className="text-gray-700">
                Fertile Narragansett hatching eggs available in season. Contact us for pricing
                and to be added to our availability list.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Chicks &amp; Poults</h3>
              <p className="text-gray-700">
                Turkey poults available seasonally. Reservations are strongly encouraged —
                our poults sell out quickly each year.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">
                Thanksgiving Reservations
              </h3>
              <p className="text-gray-700 mb-3">
                Reserve a pasture-raised, table-ready Narragansett Heritage Turkey for your
                Thanksgiving table. Our birds are raised on pasture with access to forage and
                fed a wholesome diet — no shortcuts.
              </p>
              <p className="text-gray-700">
                Reservations open in spring. A deposit is required to secure your bird.
                Contact us early — spots are extremely limited each year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-emerald-50 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold text-emerald-800 mb-2">Ready to reserve?</h2>
          <p className="text-gray-700">
            Reach out to us at{" "}
            <a href="mailto:farm@dreamdancinacres.com" className="text-emerald-600 hover:text-emerald-800 font-medium">
              farm@dreamdancinacres.com
            </a>
            {" "}— we&apos;d love to hear from you!
          </p>
        </div>
      </section>

    </main>
  );
};

export default Poultry;
