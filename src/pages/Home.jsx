import { useContext } from "react";
import { Context } from "../context/GlobalContext";
import Navbar from "../components/Navbar";
import Carrossel from "../components/Carrossel";
import Reviews from "../components/Reviews";
import HowItWorks from "../components/HowItWorks";
import Partners from "../components/Partners";

function Home() {
  const { isLoading } = useContext(Context);

  return (
    <>
      {!isLoading && <Navbar />}
      <Carrossel />
      <HowItWorks />
      <Reviews />
      <Partners />
    </>
  );
}

export default Home;
