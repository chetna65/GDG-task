export default function Section() {
  return (
    <div className="w-full py-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      
      {/* Section 1: Our Mission */}
      <div className="text-center mb-10">
        <div className="inline-flex flex-col items-center">
          <p className="text-2xl md:text-3xl font-semibold text-[#5F5F5F] font-[Product Sans]">Our Mission</p>
          <img src="/blue-line.png" className="w-24 md:w-32 mt-2" alt="Blue underline" />
        </div>
      </div>
      
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-20">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src="/our-mission.png" className="w-full max-w-md" alt="People collaborating on a project"/>
        </div>
        {/* Text with decorative bar */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start gap-4">
          <p className="font-[Product Sans] font-normal text-[#5F5F5F] text-base leading-7 text-center lg:text-left">
            Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.
          </p>
          <img src="/Subtract1.png" className="hidden lg:block h-36 flex-shrink-0" alt="" />
        </div>
      </div>

      {/* Section 2: Our Perspective */}
      <div className="text-center mb-10">
        <div className="inline-flex flex-col items-center">
          <p className="text-2xl md:text-3xl font-semibold text-[#5F5F5F] font-[Product Sans]">Our Perspective</p>
          <img src="/green-line.png" className="w-24 md:w-32 mt-2" alt="Green underline" />
        </div>
      </div>
      
      <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-12 mb-20">
        {/* Image (appears on the right on large screens) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src="/perspective.png" className="w-full max-w-md" alt="Team working on a puzzle board"/>
        </div>
        {/* Text with decorative bar (appears on the left on large screens) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end gap-4">
          <img src="/Subtract2.png" className="hidden lg:block h-36 flex-shrink-0" alt="" />
          <p className="font-[Product Sans] font-normal text-[#5F5F5F] text-base leading-7 text-center lg:text-left">
            We're a community-driven initiative aiming to bridge the gap between research and practice, develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers, spreading stimulative ideas and working for a solution driven team.
          </p>
        </div>
      </div>

      {/* Section 3: What Keeps Us Going? */}
      <div className="text-center mb-10">
        <div className="inline-flex flex-col items-center">
          <p className="text-2xl md:text-3xl font-semibold text-[#5F5F5F] font-[Product Sans]">What Keeps Us Going?</p>
          <img src="/yellow-line.png" className="w-24 md:w-32 mt-2" alt="Yellow underline" />
        </div>
      </div>
      
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src="/keep-going.png" className="w-full max-w-md" alt="People building a puzzle together"/>
        </div>
        {/* Text with decorative bar */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start gap-4">
          <p className="font-[Product Sans] font-normal text-[#5F5F5F] text-base leading-7 text-center lg:text-left">
            Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights. The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.
          </p>
          <img src="/Subtract3.png" className="hidden lg:block h-36 flex-shrink-0" alt="" />
        </div>
      </div>
      <br></br><br></br><br></br><br></br>
    </div>
  );
}