import { useThemeStore } from "./store/useThemeStore.js";
import { useEffect } from "react";

import {  Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home.jsx"
import Signup from "./pages/Signup.jsx"
import Login from "./pages/Login.jsx"
import Setting from "./pages/Setting.jsx"
import Profile from "./pages/Profile.jsx"
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import { useAuthStore } from "./store/useAuthStore.js";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers,connectSocket,socket } = useAuthStore();
  const { theme } = useThemeStore();
  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (authUser && !socket) {
      connectSocket();
    }
  }, [authUser, socket, connectSocket]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

    
  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/settings" element={<Setting />} />
        <Route
          path="/profile"
          element={authUser ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
