import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Stats from "./components/Stats";
import DoctorRegistration from "./pages/DoctorRegistration";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar clinicName="MediCare+" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register-doctor" element={<DoctorRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;