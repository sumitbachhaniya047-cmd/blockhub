import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap"
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blockhub-tau.vercel.app"),

  title: {
    default: "BlockHub — Learn. Build. Grow.",
    template: "%s | BlockHub"
  },

  description:
    "BlockHub helps students discover programming courses, projects, certificates, internships and career roadmaps — all in one place.",

  keywords: [
    "BlockHub",
    "free programming courses",
    "coding courses for students",
    "student internships",
    "programming certificates",
    "career roadmaps",
    "DSA courses",
    "web development courses",
    "AI ML courses",
    "college student resources"
  ],

  authors: [{ name: "Sumit Bachhaniya" }],
  creator: "Sumit Bachhaniya",
  applicationName: "BlockHub",

  alternates: {
    canonical: "/"
  },

  openGraph: {
    type: "website",
    url: "https://blockhub-tau.vercel.app/",
    siteName: "BlockHub",
    title: "BlockHub — Learn. Build. Grow.",
    description:
      "Discover courses, projects, certificates, internships and career roadmaps for students.",
    locale: "en_IN"
  },

  robots: {
    index: true,
    follow: true
  },

  verification: {
    google: "SB-gz9Y8xKqhX0lgwpdXwZHZvump1FKYv3xePggoBMg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="font-body">
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}