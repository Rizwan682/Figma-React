import React from "react";
import './App.css';
import AppHeader from "./components/header/AppHeader";
import CarouselHero from "./components/MainContent/Content";
import SectionTwo from "./components/MainContent/ContentSecond"
import Cards from "./components/MainContent/Section3";
import CardCarouselHeader from "./components/MainContent/CardCarousrelHeader"
import BasicDemo from "./components/MainContent/CardCarousel"
import Container from "./components/MainContent/Container";
// import DifferentData from "./components/MainContent/CardCarouselAssets"
// import DifferentData from "./data/DifferentData"
import SeeAllHeader from "./components/MainContent/SeeAll"
// import SeeAllCarsousel from "./components/MainContent/SeeAllCarsousel"

import CarouselAssets from "./components/MainContent/CardCarouselAssets"
import AnotherCarouselAssets from "./components/MainContent/AnotherCarouselAssets"
import ShopCategoriesHeader from "./components/MainContent/ShopCategoriesHeader"
import ShopCategoriesCards from "./components/MainContent/ShopCategoriesCards"

const App = () => {
  return (
    <div >
      <AppHeader />
      <CarouselHero />
      <SectionTwo />
      <Cards />
      <CardCarouselHeader />
      <BasicDemo data={CarouselAssets} />
      <Container section="section1" />
      <SeeAllHeader />
      {/* <BasicDemo data={AnotherCarouselAssets} /> */}
      {/* <ShopCategoriesHeader /> */}
      {/* <ShopCategoriesCards /> */}
      {/* <Container section="section2" /> */}
    </div>
  );
};

export default App;
