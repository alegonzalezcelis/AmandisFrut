import { useEffect } from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";

// AOS library
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Nav />
      <Home />
    </>
  );
};

export default App;
