import "~/styles/globals.css";
import { type Metadata } from "next";
import NavBar from './_components/NavBar';

export const metadata: Metadata = {
  title: "Winston's Walkers",
  description: "Dog Walking and Pet Sitting Services",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
