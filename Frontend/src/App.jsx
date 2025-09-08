import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import Authpage from "./pages/Authpage.jsx";
import "./index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage("home"); // Go to the home page after login
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setCurrentPage("home"); // Go back to the home page after logout
  };

  const renderContent = () => {
    if (!isLoggedIn && currentPage === "auth") {
      return <Authpage onLogin={handleLogin} />;
    }

    // This is the user's main app view
    return <HomePage onGetStarted={() => setCurrentPage("auth")} />;
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Header
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          onNavigate={setCurrentPage}
        />
        <main className="flex-grow">{renderContent()}</main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
