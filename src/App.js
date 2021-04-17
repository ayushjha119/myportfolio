import React from "react";

import MyNavbar from "./components/my-navbar/mynavbar.components";
import MyCarousel from "./components/my-Carousel/my-Carousel.component";
import TitleMessage from "./components/title-message/title.message.component";


import './App.css';

const App = () =>  {
  return (
    <div >
    <MyNavbar/>
    <MyCarousel/>
    <TitleMessage/>
     
    </div>
  );
}

export default App;
