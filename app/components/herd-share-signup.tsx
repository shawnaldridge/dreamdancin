"use client";

import { useState } from "react";

// Each link charges N shares ($40/mo each) + N deposits ($40 one-time each).
const SIGNUP_URLS: Record<number, string> = {
  1: "https://buy.stripe.com/00wfZ94X97EA6LIaGw9Zm01",
  2: "https://buy.stripe.com/9B6fZ989l9MI0nk4i89Zm02",
  3: "https://buy.stripe.com/6oUfZ94X99MIfiebKA9Zm04",
  4: "https://buy.stripe.com/8x2bITblx9MIeea2a09Zm03",
  5: "https://buy.stripe.com/7sYeV5gFR9MI3zw8yo9Zm05",
  6: "https://buy.stripe.com/dRm7sD4X96AwgmieWM9Zm00",
};

type HerdShareSignupProps = {
  className?: string;
};

const HerdShareSignup = ({ className = "" }: HerdShareSignupProps) => {
  const [shares, setShares] = useState(1);
  const depositTotal = shares * 40;
  const monthlyTotal = shares * 40;

  return (
    <div className={`flex flex-col items-start gap-3 ${className}`}>
      <label className="text-gray-700">
        Number of shares
        <select
          value={shares}
          onChange={(e) => setShares(Number(e.target.value))}
          className="ml-3 rounded-md border border-emerald-200 bg-white px-3 py-2 text-emerald-900"
        >
          {Object.keys(SIGNUP_URLS).map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>
      <p className="text-sm text-gray-600">
        Due today: <strong>${depositTotal}</strong> deposit + first month{" "}
        <strong>${monthlyTotal}</strong>
        {shares > 1 ? ` (${shares} shares)` : ""}. Then ${monthlyTotal}/month.
      </p>
      <a
        href={SIGNUP_URLS[shares]}
        className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
      >
        Sign up online
      </a>
    </div>
  );
};

export default HerdShareSignup;
