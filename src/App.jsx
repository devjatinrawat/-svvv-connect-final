import { Routes, Route } from "react-router-dom";
import React from 'react'
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";
import Blog from "./pages/Blog/Blog";
import Resources from "./pages/Resources/Resources";
import Register from "./pages/Register/Register";

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/aboutus" element={<WhoWeAre />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
        </Routes>
    </div>
  )
}

export default App



