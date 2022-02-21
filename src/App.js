import React, { useEffect, useState } from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from "react-loader-spinner";
import "./App.css";
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <BallTriangle FaCentercode color="#DCCA87" height={200} width={150} />
      ) : (
        <div>
          <Navbar />
          <Header />
          <AboutUs />
          <SpecialMenu />
          <Chef />
          <Intro />
          <Laurels />
          <Gallery />
          <FindUs />
          <Footer />
        </div>
      )}
    </>
  );
};
export default App;
