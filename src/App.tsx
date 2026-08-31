import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Stats from "./components/Stats";

function App() {
  return (
    <div>
      <Navbar clinicName = "MediCare+" />

      <Hero />
      <Stats />
      <Services />
      <Footer />
    </div>
  );
}

export default App;