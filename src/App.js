import React from "react";
import {Header} from "./components/common"
import './App.css';
import {Home} from "./components/common";
import {Footer} from "./components/common";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {About} from "./components/common";
import {Pricing} from "./components/common";
import {Contact} from "./components/common";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
      <BrowserRouter>
      <ScrollToTop />
        <div className='App-header'>
           <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about"  element={<About />} />
                <Route path="/pricing"  element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
           <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
