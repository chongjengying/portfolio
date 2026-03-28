import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const siteUrl = "https://cjy-portfolio.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chong Jeng Ying | Software Engineer",
  description:
    "Software engineering professional experienced in enterprise logistics applications, production support, and system optimization.",
  keywords: [
    "Software Engineer",
    "Application Support Engineer",
    "Backend Engineer",
    "ERP Systems",
    "Angular",
    "Java",
    "Spring Boot",
    "SQL",
    "Logistics Systems",
    "TEA",
    "WMS",
  ],
  authors: [{ name: "Chong Jeng Ying" }],
  openGraph: {
    title: "Chong Jeng Ying | Software Engineer",
    description: "Building reliable enterprise software and logistics system solutions.",
    type: "website",
    url: "/",
    siteName: "Chong Jeng Ying",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Chong Jeng Ying — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chong Jeng Ying | Software Engineer",
    description: "Building reliable enterprise software and logistics system solutions.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="scanlines" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
