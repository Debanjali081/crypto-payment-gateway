import ApiShowcase from "../components/home/APIShowcase";
import Features from "../components/home/Features";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import Pricing from "../components/home/Pricing";

export default function Home() {
  return (
    <div className="bg-bg">
      <Navbar/>
      <Hero/>
      <Features/>
      <ApiShowcase/>
      <Pricing/>
      <Footer/>
    </div>
  );
}
