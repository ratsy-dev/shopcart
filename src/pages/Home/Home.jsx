import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import Register from "./Register";
import LocationSprade from "./LocationSprade";
import AboutUs from "./AboutUs";
import Sponsor from "./Sponsor";
import CategoryShowCase from "./CategoryShowCase";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <LocationSprade />
      <AboutUs />
      <Sponsor />
    </div>
  );
};

export default Home;
