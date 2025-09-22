import Navbar from "./components/Navbar"
import Intro from "./components/Intro";
import Section from "./components/Section";
import Stats from "./components/Stats";
import Technologies from "./components/Technologies";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <Intro />
      <Section
        title="Our Mission"
        text="GDGs are communities for developers to connect, learn and grow..."
        img="get-to-know.png"
        reverse={false}
      />
      <Section
        title="Our Perspective"
        text="We aim to bring developers together and provide resources..."
        img="purpose.png"
        reverse={true}
      />
      <Section
        title="What Keeps Us Going"
        text="Workshops, hackathons, speaker sessions and much more..."
        img="events.png"
        reverse={false}
      />
      <Stats />
      <Technologies />
      <FAQ />
      <Footer />
    </div>
  );
}
