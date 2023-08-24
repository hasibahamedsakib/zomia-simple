import Navbar from "./components/Navbar/Navbar";

import HeroSection from "./components/Hero_Section/HeroSection";
import Services from "./components/Services/Services";
import About from "./components/About_Us/About";
import Description from "./components/Description/Description";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Description />
    </div>
  );
};

export default App;
