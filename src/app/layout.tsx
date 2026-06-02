import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Akshat Dahiya · AI/ML Engineer & Full Stack Developer",
    template: "%s · Akshat Dahiya",
  },
  description:
    "Akshat Dahiya — 3rd-year B.Tech CSE (AI & ML) student at Manipal University Jaipur. Building intelligent systems at the intersection of design, data, and code. 7+ industry certifications in AI, ML, and Data Science from IBM, Coursera, and IIT Kharagpur collaborations.",
  keywords: [
    "Akshat Dahiya",
    "AI/ML Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "Python",
    "Portfolio",
    "Manipal University",
    "Student Portfolio",
    "AI Engineer India",
  ],
  authors: [{ name: "Akshat Dahiya" }],
  creator: "Akshat Dahiya",
  publisher: "Akshat Dahiya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshatdahiya.vercel.app",
    siteName: "Akshat Dahiya",
    title: "Akshat Dahiya · AI/ML Engineer & Full Stack Developer",
    description:
      "Portfolio of Akshat Dahiya — 3rd-year B.Tech CSE (AI & ML) student building intelligent systems with 7+ industry certifications.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Akshat Dahiya · AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Dahiya · AI/ML Engineer & Full Stack Developer",
    description:
      "Portfolio of Akshat Dahiya — building intelligent systems at the intersection of design, data, and code.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://akshatdahiya.vercel.app" },
  metadataBase: new URL("https://akshatdahiya.vercel.app"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Akshat Dahiya",
              jobTitle: "AI/ML Engineer & Full Stack Developer",
              url: "https://akshatdahiya.vercel.app",
              email: "dahiyakashat10@gmail.com",
              telephone: "+917015708113",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sonipat",
                addressRegion: "Haryana",
                addressCountry: "IN",
              },
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Manipal University Jaipur",
                },
              ],
              knowsAbout: [
                "Machine Learning",
                "Python",
                "AI",
                "Data Analytics",
                "Web Development",
                "DSA",
                "DBMS",
              ],
              hasCredential: [
                "Machine Learning with Python - IBM",
                "Generative AI: Prompt Engineering Basics - IBM",
                "Python for Data Science and AI - IBM",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
