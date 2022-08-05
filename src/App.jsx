import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";

import "./assets/App.css";

// The App component holds the routing for the 2 pages

function App() {
  return (
    <BrowserRouter>
      <main>
        <div className="App">
          <Navbar />
          <Routes>
            {/* HomePage holds all of the Search components */}
            <Route exact path="/" element={<HomePage />} />
            {/* FavoritesPage holds all of the Favorite components */}
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
