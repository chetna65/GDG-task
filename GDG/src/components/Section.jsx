export default function Section() 
{
    return ( 
    <div className="w-full py-12 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto"> 
      
      <p className="mt-6 text-center font-[Product Sans] font-semibold text-lg md:text-xl text-[#5F5F5F] mb-2">Our Mission</p> 
      <div className="flex justify-center mb-6">
        <img src="/blue-line.png" className="w-24 md:w-32"></img> 
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16 mx-auto"> 
        <div className="w-full lg:w-auto flex-shrink-0 flex justify-center">
          <img src="/our-mission.png" className="w-full max-w-[420px]"></img> 
        </div>
        <div className="flex items-center gap-4 mx-auto">
          <p className="font-[Product Sans] font-normal text-[#5F5F5F] text-sm sm:text-base leading-7 max-w-[560px] text-center px-4">
            Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.
          </p> 
          <img src="/Subtract1.png" className="hidden lg:block w-[10px] h-48 flex-shrink-0" />
        </div>
      </div> 
        
      <p className="text-center font-[Product Sans] font-semibold text-lg md:text-xl text-[#5F5F5F] mb-2">Our Perspective</p> 
      <div className="flex justify-center mb-6">
        <img src="/green-line.png" className="w-24 md:w-32"></img> 
      </div>
      
      <div className="flex flex-col items-center gap-8 mb-16"> 
        <div className="w-full max-w-3xl relative order-2">
          <div className="hidden lg:flex absolute -left-3 top-0 bottom-0 items-center">
            <img src="/Subtract2.png" className="w-[10px] h-48"></img> 
          </div>
          <p className="font-[Product Sans] font-normal text-sm sm:text-base leading-7 text-[#5F5F5F] text-center px-4 sm:px-6">
            We're a community-driven initiative aiming to bridge the gap between research and practice , develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers , spreading stimulative ideas and working for a solution driven team.
          </p> 
        </div>
        <div className="w-full max-w-sm order-1 flex justify-center">
          <img src="/perspective.png" className="w-full max-w-[360px]"></img> 
        </div>
      </div> 

      <p className="text-center font-[Product Sans] font-semibold text-lg md:text-xl text-[#5F5F5F] mb-2">
        What Keeps Us Going?</p> 
      <div className="flex justify-center mb-6">
        <img src="/yellow-line.png" className="w-24 md:w-32"></img> 
      </div>
        
      <div className="flex flex-col items-center gap-8"> 
        <div className="w-full max-w-sm flex justify-center">
          <img src="/keep-going.png" className="w-full max-w-[360px]"></img> 
        </div>
        <div className="w-full max-w-3xl relative">
          <p className="font-[Product Sans] font-normal text-sm sm:text-base leading-7 text-[#5F5F5F] text-center px-4 sm:px-6">
            Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights. The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.</p> 
          <div className="hidden lg:flex absolute -right-3 top-0 bottom-0 items-center">
            <img src="/Subtract3.png" className="w-[10px] h-48"></img> 
          </div>
        </div>
      </div> 
</div> 
); 
}