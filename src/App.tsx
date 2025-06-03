import { Footer } from "./components/elements/Footer";
import { Layout } from "./components/layout"
import { AboutUs } from "./components/sections/AboutUs";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";


function App() {

  return (
    <Layout title="Tax Methods Company">
      <Hero />
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App
