"use client";

import { useState } from "react";

const COLORS = [
  "bg-blue-500",
  "bg-purple-500",
  "bg-green-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-red-500",
];

interface ToolLogoProps {
  name: string;
  logoUrl?: string | null;
  websiteUrl?: string | null;
  className?: string;
}

export default function ToolLogo({
  name,
  logoUrl,
  websiteUrl,
  className = "h-10 w-10",
}: ToolLogoProps) {
  const [hasError, setHasError] = useState(false);

  // If a logo_url exists in DB, prioritize it.
  // Otherwise, if website_url exists, attempt to fetch logo from Clearbit.
  let finalLogoUrl = logoUrl;

  if (!finalLogoUrl && websiteUrl) {
    try {
      const urlObj = new URL(websiteUrl);
      const domain = urlObj.hostname.replace(/^www\./, '');
      finalLogoUrl = `https://logo.clearbit.com/${domain}`;
    } catch {
      // Just ignore invalid URLs
    }
  }

  const bgColor = COLORS[name.charCodeAt(0) % COLORS.length];

  if (!finalLogoUrl || hasError) {
    return (
      <div
        className={`${className} flex shrink-0 items-center justify-center rounded-lg font-bold text-white shadow-sm border border-gray-700 bg-gray-800`}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  // Add the Google Favicon API as a reliable fallback over Clearbit
  return (
    <div className={`${className} flex shrink-0 items-center justify-center rounded-lg overflow-hidden bg-white/5 border border-gray-800 p-0.5`}>
      <img
        src={`https://www.google.com/s2/favicons?domain=${websiteUrl}&sz=128`}
        alt={`${name} logo`}
        className="h-full w-full rounded-[6px] object-contain rounded-md"
        onError={(e) => {
          // If Google fails, try Clearbit, if that fails set error
          if (e.currentTarget.src.includes('google.com')) {
            e.currentTarget.src = finalLogoUrl;
          } else {
            setHasError(true);
          }
        }}
      />
    </div>
  );
}
