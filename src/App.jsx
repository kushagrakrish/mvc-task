import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:name' element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
