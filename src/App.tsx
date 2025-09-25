import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
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
        <Form />
      </main>
      <Footer />
    </>
  );
}
