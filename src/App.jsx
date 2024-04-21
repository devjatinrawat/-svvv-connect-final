import { Routes, Route } from "react-router-dom";
import React from 'react'
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";
import Blog from "./pages/Blog/Blog";
import Resources from "./pages/Resources/Resources";
import Register from "./pages/Register/Register";
import Music from "./components/Music";
import { useState } from "react";
import Profile from "./pages/Profile/Profile";


const App = () => {
  
  const [isMusicPlaying, setIsMusicPlaying] = useState(true); // Manage music playing state
  return (
    <div>
        <Music isPlaying={isMusicPlaying} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/aboutus" element={<WhoWeAre />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
    </div>
  )
}

export default App



