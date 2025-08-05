import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import Notices from "./pages/Notices";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import Sermons from "./pages/Sermons";
import Connect from "./pages/Connect";

// Intro slides
import IntroSlideOne from "./components/IntroSlideOne";
import IntroSlideTwo from "./components/IntroSlideTwo";

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    return !localStorage.getItem("seenIntro");
  });

  const handleIntroDone = () => {
    localStorage.setItem("seenIntro", "true");
    setShowIntro(false);
  };

  return (
    <Router>
      <Routes>
        {/* Intro Slides */}
        {showIntro ? (
          <>
            <Route
              path="/"
              element={
                <IntroSlideOne
                  onNext={() => window.location.href = "/intro-2"}
                  onSkip={handleIntroDone}
                />
              }
            />
            <Route
              path="/intro-2"
              element={
                <IntroSlideTwo
                  onBack={() => window.location.href = "/"}
                  onDone={handleIntroDone}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          // Main App Routes
          <>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/notices" element={<Layout><Notices /></Layout>} />
            <Route path="/ministries" element={<Layout><Ministries /></Layout>} />
            <Route path="/events" element={<Layout><Events /></Layout>} />
            <Route path="/sermons" element={<Layout><Sermons /></Layout>} />
            <Route path="/connect" element={<Layout><Connect /></Layout>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
