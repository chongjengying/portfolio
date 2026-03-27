import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Chong Jeng Ying | Software Engineer",
  description:
    "Software engineering professional experienced in enterprise logistics applications, production support, and system optimization.",
  keywords: [
    "Software Engineer",
    "Application Support Engineer",
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
