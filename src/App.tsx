// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import BookfavsBasket from "./pages/BookfavsBasket";
import Navbar from "./components/Navbar";




export default function App() {

  return (
   <div className="min-h-[100vh] bg-amber-400">
       <Navbar/>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:isbn13" element={<BookDetails />} />
      <Route path="/bookfavs" element={<BookfavsBasket />} />
    </Routes>
   </div>
  )
}