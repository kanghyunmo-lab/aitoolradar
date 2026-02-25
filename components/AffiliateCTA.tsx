"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface Props {
  href: string;
  toolName: string;
  toolSlug: string;
  placement: "top_cta" | "bottom_cta" | "winner_banner" | "pros_cons";
  children: React.ReactNode;
  className?: string;
}

export default function AffiliateCTA({
  href,
  toolName,
  toolSlug,
  placement,
  children,
  className,
}: Props) {
  function handleClick() {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "affiliate_click", {
        tool_name: toolName,
        tool_slug: toolSlug,
        placement,
        destination_url: href,
      });
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
