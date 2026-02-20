import type { Metadata } from "next";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://infinitive.cc"),
  title: {
    default: "infinitive",
    template: "%s | infinitive",
  },
  description: "Running my own stack on the internet.",
  creator: "Maksym Tarashchan",
  publisher: "Maksym Tarashchan",
  openGraph: {
    type: "website",
    url: "https://infinitive.cc",
    siteName: "infinitive.cc",
    title: "infinitive.cc",
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
  return (
    <html lang="en">
      <body>
        <div className="max-w-3xl w-full min-h-screen flex flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
