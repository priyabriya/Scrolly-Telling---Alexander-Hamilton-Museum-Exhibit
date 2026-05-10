import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Alexander Hamilton — Power of the Pen",
  description:
    "A museum exhibit exploring Alexander Hamilton's life through his writings and the institutions he created.",
  keywords: ["Alexander Hamilton", "Founding Fathers", "American History", "Federalist Papers"],
  openGraph: {
    title: "Alexander Hamilton — Power of the Pen",
    description:
      "From a teenage clerk in the West Indies to architect of the American financial system.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <footer className="site-footer">
          <span className="site-footer__brand">Alexander Hamilton — Power of the Pen</span>
          <span className="site-footer__credits">
            Sources: National Archives · Library of Congress · NPS · Wikipedia
          </span>
        </footer>
      </body>
    </html>
  );
}
