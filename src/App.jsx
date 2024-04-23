import { Routes, Route, Navigate , useNavigate} from "react-router-dom";
import React, { useState } from "react"; // Import useState
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";
import Blog from "./pages/Blog/Blog";
import Resources from "./pages/Resources/Resources";
import Register from "./pages/Register/Register";
import Music from "./components/Music";
import Profile from "./pages/Profile/Profile";
import { useEffect  } from "react"; // Import useEffect
import { Navbar } from "./components";

const App = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true); // Manage music playing state
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setUser(true);
    navigate('./login');

  };

  const logout = () => {
    setUser(false);
    navigate('./');
  };

  return (
<div>
  {/* Render the Music component */}
  <Music isPlaying={isMusicPlaying} />

  {/* Render the Navbar component */}
  <Navbar user={user} login={login} logout={logout} />

  {/* Define routes */}
  <Routes>
    <Route path="/" element={<Home />} /> {/* Render Home component when path is '/' */}
    <Route path="/login" element={<Login />} /> {/* Render Login component when path is '/login' */}
    <Route path="/aboutus" element={<WhoWeAre />} /> {/* Render WhoWeAre component when path is '/aboutus' */}
    <Route path="/register" element={<Register />} /> {/* Render Register component when path is '/register' */}
    <Route path="/blog" element={<Blog />} /> {/* Render Blog component when path is '/blog' */}
    <Route path="/resources" element={<Resources />} /> {/* Render Resources component when path is '/resources' */}

    {/* Use a ProtectedRoute for the profile path */}
    <Route
      path="/profile"
      element={
        <ProtectedRoute user={user}>
          <Profile />
        </ProtectedRoute>
      }
    />
  </Routes>
</div>

  );
};

export default App;

//* Create Protected Route Function
export const ProtectedRoute = ({ user, children }) => {
  if (user) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};
