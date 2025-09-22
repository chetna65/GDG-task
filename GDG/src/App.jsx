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
      <Section />
      {/* <Section
        title="Our Mission"
        text="Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society."
        img="/our-mission.png"
        reverse={false}
      />
      <Section
        title="Our Perspective"
        text="We’re a community-driven initiative aiming to bridge the gap between research and practice , develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers , spreading stimulative ideas and working for a solution driven team."
        img="/perspective.png"
        reverse={true}
      />
      <Section
        title="What Keeps Us Going?"
        text="Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights. The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge."
        img="/keep-going.png"
        reverse={false}
      /> */}
      <Stats />
      <Technologies />
      <FAQ />
      <Footer />
    </div>
  );
}
