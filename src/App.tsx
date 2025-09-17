import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
// import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />

        <Services />
        <About />
      </main>
      <Footer />
    </>
  );
}
