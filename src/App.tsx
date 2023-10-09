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
import Signup from "./pages/Signup";
import Find from "./pages/Find";

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
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
