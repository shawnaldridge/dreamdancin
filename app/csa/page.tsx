import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import HerdShareSignup from "../components/herd-share-signup";

export const metadata: Metadata = {
  title: "CSA & Herd Share | Dream Dancin' Acres",
  description:
    "Community-supported agriculture and herd share information for Dream Dancin' Acres in Noti, Oregon.",
};

const forms = [
  {
    label: "Caprine Agistment Agreement",
    href: "/forms/caprine-agistment-agreement.pdf",
  },
  {
    label: "Caprine Labor Services Agreement",
    href: "/forms/caprine-labor-services-agreement.pdf",
  },
  {
    label: "Caprine Bill of Sale",
    href: "/forms/caprine-bill-of-sale.pdf",
  },
];

const CsaHerdShare = () => {
  return (
    <main className="min-h-screen">
      <section className="bg-emerald-50 py-12 md:py-16 border-b border-emerald-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
            Herd Share
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Learn how you can support the farm and enjoy a share of what we raise through our herd share agreement.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 text-center">
            Herd Share FAQs
          </h2>

          <div className="mt-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/corrie_2025_2.jpg"
                  alt="Corrie, one of our Nigerian Dwarf goats"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="bg-emerald-800 bg-opacity-80 text-white text-center py-2 px-4">
                  <p className="text-sm md:text-base">Corrie</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold text-emerald-700">
                What is a herd share?
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                A herd share (or &quot;goat share,&quot; &quot;milk share,&quot; etc.) is a legal arrangement in which you own part of the dairy herd, giving you access to raw (unpasteurized) milk and dairy products from animals you have a stake in. Pasteurized dairy is also available upon request.
              </p>
            </div>
          </div>

          <div className="mt-10 md:mt-12 space-y-10">

            <div>
              <h3 className="text-xl font-semibold text-emerald-700">
                How the herd share works
              </h3>
              <div className="mt-3 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our herd share agreement allows you to share in a portion of what our herd produces, milk, cheese, yogurt, and other seasonal products.
                  The State of Oregon requires implementation of a herd share program for raw milk producers who also want to provide raw milk products (like cheese, yogurt, butter, etc.) to their members.
                </p>
                <p>
                  There is a one-time <strong>$40 deposit</strong> per share.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    When you join, you become part owner of our caprine (goat) herd—and you reap the benefits of its milk production in return.
                  </li>
                  <li>
                    You can leave the herd share at any time by selling your share back to us—think &quot;refund&quot; if you decide to pull out of the program for any reason.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-700">
                After the one-time deposit, you pay monthly for the care of your share of the herd. In return, you get dairy products.
              </h3>
              <div className="mt-3 space-y-4 text-gray-700 leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Each share is <strong>$40 per month</strong> and entitles you to 1/2 gallon of milk per week, or one applicable portion of available cheese.
                  </li>
                  <li>
                    Each share also requires its own one-time <strong>$40 deposit</strong>.
                  </li>
                  <li>
                    Herd share products are available for pickup at our farm in Noti, OR.
                  </li>
                  <li>
                    Alternatively, we have drop-off locations in Eugene, and Veneta, OR, and can discuss delivery options as needed.
                  </li>
                  <li>
                    Payment is available via cash, Venmo, or online signup with automatic monthly payments.
                  </li>
                </ul>
              </div>
              <HerdShareSignup className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 py-12 md:py-16 border-y border-emerald-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">
            Download and complete the 3 forms below to join the herd share
          </h2>
          <p className="mt-4 text-gray-700">
            Please print and fill out the following forms, and bring them to your first pickup or send them to us by email. Thank you!
          </p>
          <ul className="mt-8 space-y-4">
            {forms.map((form) => (
              <li key={form.href}>
                <a
                  href={form.href}
                  download
                  className="inline-block w-full max-w-md bg-white border border-emerald-200 hover:border-emerald-400 text-emerald-700 hover:text-emerald-900 font-medium px-6 py-3 rounded-lg shadow-sm transition-colors"
                >
                  {form.label} (PDF)
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">
            Community Supported Agriculture (CSA)
          </h2>
          <p className="mt-5 md:mt-6 text-gray-700 leading-relaxed">
            We also plan to offer a CSA membership, where you receive a regular share of farm products, including eggs, poultry, dried pasta, or other items as available. Shares and schedules will vary by season; we&apos;re happy to walk you through what&apos;s offered when you reach out.
          </p>
        </div>
      </section>

      <section className="bg-emerald-50 py-10 border-t border-emerald-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold text-emerald-800 mb-2">
            Herd share questions?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Please don&apos;t hesitate to ask! Email{" "}
            <a
              href="mailto:farm@dreamdancinacres.com"
              className="text-emerald-600 hover:text-emerald-800 font-medium"
            >
              farm@dreamdancinacres.com
            </a>{" "}
            and we&apos;ll send you the latest information on CSA and herd share options.
          </p>
        </div>
      </section>
    </main>
  );
};

export default CsaHerdShare;
