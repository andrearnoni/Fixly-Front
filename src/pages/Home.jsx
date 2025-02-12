import { useContext } from "react";
import Context from "../context/Context";
import Navbar from "../components/Navbar";
import Carrossel from "../components/Carrossel";
import Reviews from "../components/Reviews";
import HowItWorks from "../components/HowItWorks";
import Partners from "../components/Partners";
import VideoEmbed from "../components/VideoEmbed";
import Footer from "../components/Footer";

function Home() {
  const { isLoading } = useContext(Context);

  return (
    <>
      {!isLoading && <Navbar />}
      <Carrossel />
      <HowItWorks />
      <Reviews />
      <Partners />
      <VideoEmbed />
      <Footer />
    </>
  );
}

export default Home;
