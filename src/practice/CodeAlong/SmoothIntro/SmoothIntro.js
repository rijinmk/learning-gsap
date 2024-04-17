import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";

function SmoothIntro() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 8500);
  }, []);

  return <>{loader ? <Loader /> : <Hero />}</>;
}

export default SmoothIntro;
