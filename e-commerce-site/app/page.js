import Hero from "./components/Hero";
import Products from "./components/Products";
import Banner from "./components/SaleBanner";
import Review from "./components/Review";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="pt-20">
      {/* <Navbar /> */}
      <Hero />
      <div className="py-16 ">
        <Products />
      </div>
      <Banner />
      <Review />
      {/* <Footer /> */}
    </main>
  );
}
