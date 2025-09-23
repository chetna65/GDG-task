import "tailwindcss";
export default function Intro() { 
  return ( 
  <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-8 pb-12"> 
  <div className="font-[Product Sans] font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-1"> 
    <span className="text-[#4285F4]">G</span> 
    <span className="text-[#EA4335]">o</span> 
    <span className="text-[#FBBC04]">o</span> 
    <span className="text-[#4285F4]">g</span> 
    <span className="text-[#34A853]">l</span> 
    <span className="text-[#EA4335]">e</span> 
    &nbsp; 
    <span className="text-black dark:text-gray-100">Developer Groups</span> 
  </div>

    <p className="font-[Product Sans] font-normal text-base sm:text-xl md:text-2xl lg:text-3xl leading-tight text-[#646464] mb-8">RBU Chapter</p> 
    <div className="flex justify-center">
      <img src="/OBJECTS.png" alt="Hero" className="w-[320px] sm:w-[380px] md:w-[440px] lg:w-[520px] h-auto"/>
    </div>
    <div className="w-40 sm:w-48 h-px bg-gray-300 mt-4 mb-2"></div>

    <p className="text-center text-[15px] sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed mb-10 font-[Product Sans]">
       Google Developer Groups are community groups for college<br></br> 
       and university students interested in Google developer<br></br> 
       technologies. 
    </p> 
    <br></br>
    <div className="mb-8">
      <div className="px-14 py-4 bg-[#4285F4] hover:bg-[#1A73E8] text-white font-extrabold tracking-wide uppercase text-lg sm:text-xl rounded-full shadow-md transition-colors min-w-[180px]">
        JOIN US
      </div>
    </div>    
    <br></br>
    <div className="flex flex-col items-center space-y-2 my-5">
      <img src="/arrow1.png" alt="arrow1" className="w-8 h-8 sm:w-9 sm:h-9" />
      <img src="/arrow2.png" alt="arrow2" className="w-8 h-8 sm:w-9 sm:h-9" />
      <img src="/arrow3.png" alt="arrow3" className="w-8 h-8 sm:w-9 sm:h-9" />
    </div>
    <br></br>
    <p className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[Product Sans] font-bold text-[#5F5F5F]">
      Get To Know Us!
    </p>
    <br></br>
  </section> 
  ); 
}