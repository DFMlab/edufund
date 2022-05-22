import { Home, Footer, About, Header, Contact, StartCampaign } from "./components/common";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App-header">
        <Header />
        <Routes>
          <Route path="/" exact="true" element={<Home />} />
          <Route path="/about" exact="true" element={<About />} />
          <Route path="/contact" exact="true" element={<Contact />} />
          <Route path="/startcampaign" exact="true" element={<StartCampaign />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
