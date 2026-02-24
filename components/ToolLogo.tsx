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
  className?: string;
}

export default function ToolLogo({
  name,
  logoUrl,
  className = "h-10 w-10",
}: ToolLogoProps) {
  const [hasError, setHasError] = useState(false);

  const bgColor = COLORS[name.charCodeAt(0) % COLORS.length];

  if (!logoUrl || hasError) {
    return (
      <div
        className={`${className} ${bgColor} flex shrink-0 items-center justify-center rounded-lg font-bold text-white`}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={logoUrl}
      alt={`${name} logo`}
      className={`${className} rounded-lg object-contain`}
      onError={() => setHasError(true)}
    />
  );
}
