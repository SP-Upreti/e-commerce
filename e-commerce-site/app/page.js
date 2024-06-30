import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Banner from "./components/SaleBanner";
import Review from "./components/Review";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Banner />
      <Review />
      <Footer/>
    </main>
  );
}
