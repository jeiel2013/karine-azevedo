import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import PhotoStyle from "./components/PhotoStyle";
import FamilyPhotography from "./components/FamilyPhotography";
import IndividualPhotography from "./components/IndividualPhotography";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  useEffect(() => {
    // Intersection Observer for Animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in-section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[var(--color-brand-bg)] font-[family-name:var(--font-family-sans)] text-[var(--color-brand-brownRed)] antialiased">
      <Header />
      <Hero />
      <About />
      <PhotoStyle />
      <FamilyPhotography />
      <IndividualPhotography />
      <Services />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
