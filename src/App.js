import React from "react";
import AboutUs from "./Components/AboutUs";
import DesignWeCreate from "./Components/DesignWeCreate";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import MainBanner from "./Components/MainBanner";
import OurPortfolio from "./Components/OurPortfolio";
import OurServices from "./Components/OurServices";
import Testominal from "./Components/Testominal";
import YourVisition from "./Components/YourVisition";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Innerbanner from "./Components/Innerbanner.js";
import { Projects } from "./Components/Projects";
import { ContactBox } from "./Components/ContactBox";
import { ContactForm } from "./Components/ContactForm";
import { Map } from "./Components/Map";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<>
            <MainBanner />
            <AboutUs />
            <DesignWeCreate />
            <YourVisition />
            <OurServices />
            <OurPortfolio />
            <Testominal />
          </>}>

          </Route>
          <Route  path='/about' element={<>

            <Innerbanner  heading={"About"}/>
            <AboutUs />
            <DesignWeCreate />
            <YourVisition />
          </>}></Route>
          <Route  path='/services' element={<>
            <Innerbanner  heading={"Services"}/>
            <OurServices />
            <YourVisition />
          </>}>
          </Route>
          <Route  path='/projects' element={<>
            <Innerbanner  heading={"Projects"}/>
            <Projects/>
          </>}> 
          </Route>
          <Route  path='/contact' element={<>
            <Innerbanner  heading={"Contact Us"}/>
            <ContactBox/>
            <ContactForm/>
            <Map/>
          
          </>}> 
          </Route>
         
        </Routes>
          <Footer />
      </Router>
    </>
  );
}

export default App;
