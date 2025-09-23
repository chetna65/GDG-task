import { useState, useEffect } from "react";

const Slideshow = () => {
  const slides = [
    <div className="bg-blue-500 h-64 flex items-center justify-center text-white text-2xl font-bold rounded-xl">
      Slide 1: Welcome 🚀
    </div>,
    <div className="bg-green-500 h-64 flex items-center justify-center text-white text-2xl font-bold rounded-xl">
      Slide 2: About Us 🌍
    </div>,
    <div className="bg-purple-500 h-64 flex items-center justify-center text-white text-2xl font-bold rounded-xl">
      Slide 3: Contact 📞
    </div>,
  ];

  const [index, setIndex] = useState(0);

  // Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="transition-all duration-700 ease-in-out">
        {slides[index]}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
