import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Electronic Market",
  description: "App where you get all electronic devices in a single place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}