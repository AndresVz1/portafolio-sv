import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Header from "./components/home/Header";
import Services from "./pages/Services";
import ProfileCard from "./components/home/ProfileCard";
import ExperienceExpert from "./components/home/ExperienceExpert";
import ProjectsCard from "./components/home/ProjectsCard";
import CTASection from "./components/home/CTASection";
import Footer from "./components/home/Footer";
import About from "./pages/About";
import Works from "./pages/Works"; 

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <Router>
      <div className={`${dark ? "dark" : ""} min-h-screen flex justify-center items-start bg-gradient-to-br from-gray-200 to-gray-500 p-10`}>
        <div className="container max-w-[1400px] w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-[32px] p-8 shadow-2xl">
          <Header dark={dark} setDark={setDark} />
          <Routes>
            <Route path="/" element={
              <>
                <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr_360px] gap-6 mb-7">
                  <ProfileCard />
                  <ExperienceExpert />
                  <ProjectsCard />
                </div>
                
                <Footer />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}