import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#14213D",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hamlet-growth.vercel.app"),
  title: "A growth plan for Hamlet Hotels",
  description: "Direct bookings, guest data and marketing automation across your hotels",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "A growth plan for Hamlet Hotels",
    description: "Direct bookings, guest data and marketing automation across your hotels",
    url: "/",
    siteName: "Hamlet Hotels Growth Plan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "A growth plan for Hamlet Hotels",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A growth plan for Hamlet Hotels",
    description: "Direct bookings, guest data and marketing automation across your hotels",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-cream text-charcoal selection:bg-navy selection:text-cream">
        {children}
      </body>
    </html>
  );
}
