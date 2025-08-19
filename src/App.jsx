import About from "./Components/about/About";
import HeroSection from "./sections/heroSection/HeroSection";

const App = () => {
  return (
    <>
      <div className="app overflow-hidden">
        <HeroSection />
        <div className="h-screen relative overflow-hidden mt-10"></div>
        <About />
      </div>
    </>
  );
};

export default App;
