import { Fragment } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/Services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import { useActiveSection } from "./hooks/useActiveSection";

const App = () => {
  const { activeSection, setActiveSection } = useActiveSection();

  return (
    <Fragment>
      <Header />
      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default App;
