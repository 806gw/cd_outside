import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import EventDc from "./pages/EventDc";
import Game from "./pages/Game";
import Nft from "./pages/Nft";
import Wiki from "./pages/Wiki";
import Gal from "./pages/Gal";
import Gallog from "./pages/Gallog";
import Signup from "./pages/Signup/Signup";
import Find from "./pages/Find";
import MainText from "./pages/mini-gallery/MainText";
import Mini from "./pages/mini-gallery/Mini";
import Minor from "./pages/mini-gallery/Minor";
import HitGallery from "../src/components/HitGallery/HitGallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/event" element={<EventDc />} />
        <Route path="/game" element={<Game />} />
        <Route path="/nft" element={<Nft />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/gal" element={<Gal />} />
        <Route path="/gallog" element={<Gallog />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/find" element={<Find />} />
        <Route path="/maintext" element={<MainText />} />
        <Route path="/mini" element={<Mini />} />
        <Route path="/minor" element={<Minor />} />
      </Routes>
    </BrowserRouter> 
    
  );
}

export default App;
