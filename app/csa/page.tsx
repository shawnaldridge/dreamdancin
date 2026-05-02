import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSA & Herd Share | Dream Dancin' Acres",
  description:
    "Community-supported agriculture and herd share information for Dream Dancin' Acres in Noti, Oregon.",
};

const CsaHerdShare = () => {
  return (
    <main className="min-h-screen">
      <section className="bg-emerald-50 py-12 md:py-16 border-b border-emerald-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
            CSA &amp; Herd Share
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Learn how you can support the farm and enjoy a share of what we raise—whether through a seasonal CSA or a herd share arrangement for raw dairy, pasteurized dairy also available upon request.
          </p>
          <p className="mt-4 text-gray-700">
            For current offerings, pickup schedule, and pricing, please contact us at{" "}
            <a
              href="mailto:farm@dreamdancinacres.com"
              className="text-emerald-600 hover:text-emerald-800 font-medium"
            >
              farm@dreamdancinacres.com
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-12 md:space-y-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">
              Herd share
            </h2>
            <div className="mt-5 md:mt-6 space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our primary offering is a Herd share agreement, essentially a co-ownership arrangement so members can receive milk from animals they have a stake in, structured to comply with applicable state requirements. We&apos;ll explain availability, agreements, and pickup when you contact us.
              </p>
              <p>
                The base price for our herd share is <strong>$40 per month</strong>, with a one-time <strong>$40 deposit</strong>. This entitles you to 1/2 gallon of milk per week, or one applicable portion of available cheese.
                Additional shares are each $40/month and do not require additional deposits.
                We have drop-off locations in Eugene, Springfield, and Veneta, OR. Payment is available via cash, venmo, or you can sign up through the website for automatic payments.
              </p>
            </div>
          </div>

          <div className="pt-10 md:pt-12 border-t border-emerald-100">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">
              Community Supported Agriculture (CSA)
            </h2>
            <p className="mt-5 md:mt-6 text-gray-700 leading-relaxed">
              We also offer a CSA membership, where you receive a regular share of farm products—often eggs, poultry, dried pasta from our eggs and garden, or other items as available. Shares and schedules vary by year; we&apos;re happy to walk you through what&apos;s offered when you reach out.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 py-10 border-t border-emerald-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold text-emerald-800 mb-2">Interested?</h2>
          <p className="text-gray-700">
            Email{" "}
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
