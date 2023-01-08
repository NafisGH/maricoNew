import React from "react";
// import "./HomePage.css"
import MainHomePage from "./Main/MainHomePage";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header";


const HomePage = () => {
  return (
    <div className="section_1">
      <Header/>
      <MainHomePage/>
      <Footer/>
    </div>
  );
};

export default HomePage;