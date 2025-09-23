import { useEffect, useRef } from "react";

export default function Technologies() {
  const technologies = [
    { name: "Android", img: "/android.png", barColor: "#EA4335" },
    { name: "Flutter", img: "/flutter.png", barColor: "#4285F4" },
    { name: "Cloud", img: "/cloud.png", barColor: "#34A853" },
    { name: "React", img: "/react.png", barColor: "#FFC727"}
  ];

  const sliderRef = useRef(null);
  const scrollByCards = (direction) => {
    const container = sliderRef.current;
    if (!container) return;
    const card = container.querySelector("[data-card]");
    const gap = parseInt(getComputedStyle(container).columnGap || getComputedStyle(container).gap || "24", 10);
    const cardWidth = card ? card.clientWidth + gap : 320;
    container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;
    let autoplay = setInterval(() => {
      const atEnd = Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth;
      if (atEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByCards(1);
      }
    }, 3500);
    return () => clearInterval(autoplay);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-6xl ml-[10vh] mx-auto px-4 sm:px-6 items-center">

        <div className="text-center">
          <div className="flex items-center justify-center gap-6 mb-2">
            <span className="h-[3px] w-24 bg-[#EA4335] rounded" />
            <p className="text-6xl sm:text-4xl font-bold text-[#5F5F5F] font-[Product Sans]">Technologies</p>
            <span className="h-[3px] w-24 bg-[#EA4335] rounded" />
          </div>
          <p className="text-sm sm:text-base text-[#646464] font-[Product Sans]">
            Domains That Excite Us to Collaborate and Teach!
          </p>
        </div>
        <br></br><br></br><br></br>
        {/* Carousel */}
        <div className="mt-14 flex justify-center">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-7 px-2 scroll-smooth hide-scrollbar mx-auto"
          >
            {technologies.map((tech) => (
              <div
                key={tech.name}
                data-card
                className="snap-center shrink-0 w-[300px] sm:w-[340px] bg-white dark:bg-gray-800 rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.12)] relative transition-transform duration-300 ease-out"
              >
                <span
                  className="absolute left-1/2 -translate-x-1/2 -top-2 h-1.5 w-24 rounded-full"
                  style={{ backgroundColor: tech.barColor }}
                />
                <div className="px-10 pt-9 pb-7 flex flex-col items-center text-center">
                  <img src={tech.img} alt={tech.name} className="h-16 sm:h-20 w-auto mb-4 select-none" />
                  <p className="text-lg sm:text-xl font-semibold text-[#5F5F5F] font-[Product Sans]">{tech.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br></br><br></br><br></br>
    </section>
  );
}
