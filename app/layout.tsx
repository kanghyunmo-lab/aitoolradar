import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AIToolRadar - Find the Best AI Tools for Your Needs",
    template: "%s | AIToolRadar",
  },
  description:
    "Step-by-step AI workflow guides for YouTubers and content creators. Compare 177+ AI tools, find the best tool stack, and automate your content creation process.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  verification: {
    google: "IZGbZ60wTX18dYWOMjQGtG6Zm1-eqyaC16K0cuKvqxI",
  },
  openGraph: {
    type: "website",
    siteName: "AIToolRadar",
    url: "https://www.aitoolradar.net",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aitoolradar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* WebSite + Organization JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.aitoolradar.net/#website",
                  url: "https://www.aitoolradar.net",
                  name: "AIToolRadar",
                  description: "Compare and review the best AI tools",
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://www.aitoolradar.net/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.aitoolradar.net/#organization",
                  name: "AIToolRadar",
                  url: "https://www.aitoolradar.net",
                  logo: "https://www.aitoolradar.net/logo.png",
                },
              ],
            }),
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
