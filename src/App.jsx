import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProblemStatements from "./components/ProblemStatements";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import TechQuiz from "./components/TechQuiz";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProblemStatements />
      <Registration />
      <TechQuiz />
      <Footer />
    </>
  );
}

export default App;