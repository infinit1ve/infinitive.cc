import type { Metadata } from "next";
import Script from "next/script";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://infinitive.cc"),
  title: {
    default: "Maksym",
    template: "%s | infinitive",
  },
  description:
    "Running my own stack on the internet. Portfolio of Maksym Tarashchan.",
  creator: "Maksym Tarashchan",
  publisher: "Maksym Tarashchan",
  openGraph: {
    type: "website",
    url: "https://infinitive.cc",
    siteName: "infinitive.cc",
    title: "infinitive Portfolio",
    description: "Running my own stack on the internet.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "infinitive.cc",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "infinitive.cc",
    description: "Running my own stack on the internet.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Maksym Tarashchan",
    url: "https://infinitive.cc",
    sameAs: [
      "https://github.com/infinit1ve",
      "https://linkedin.com/in/maksym-tarashchan/",
      "https://www.instagram.com/m.taraschan/",
    ],
  };
  return (
    <html lang="en">
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <body>
        <div className="max-w-3xl w-full min-h-screen flex flex-col">
          {children}
          <Footer />
        </div>
        <script
          async
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
      </body>
    </html>
  );
}
