import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VoltMart",
  description: "App where you get all electronic devices in a single place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      <body >
        <Navbar />
        <div className={inter.className}> {children}</div>
        <Footer />
      </body>
    </html>
  );
}
