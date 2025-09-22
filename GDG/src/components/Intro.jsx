export default function Intro() 
{
  return (
    <section className="text-center py-16">
      <div className="absolute top-[190px] left-[233px] font-[Product Sans] font-bold text-[84.99px] leading-[100%] tracking-[0%]">
        <span className="text-[#4285F4]">G</span> 
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC04]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
        &nbsp;
        <span>Developer Groups</span>
      </div>
      <p className="absolute top-[283px] left-[551px] font-[Product Sans] font-bold text-[50px] leading-[100%] tracking-[0%] text-[#646464]">RBU Chapter</p>
      <img src="/OBJECTS.png" alt="Hero" className="absolute top-[395px] left-[414px] h-[373px] w-[613px] " />
      <p className="absolute top-[790px] left-[272px] text-gray-600 dark:text-gray-300 font-[Product Sans] font-normal text-[35px] leading-[100%] tracking-[3%]">
        Google Developer Student Clubs are community groups for college<br></br> and university students interested in Google developer<br></br> technologies.
      </p>
      <button className="absolute top-[1000px] left-[615px] w-[244px] h-[70px] bg-blue-500 hover:bg-blue-600 text-white font-bold text-[30px] rounded-lg shadow-lg">JOIN US</button>

      <img src="/arrow1.png" className="absolute top-[1133px] left-[707px]"/>
      <img src="/arrow2.png" className="absolute top-[1171px] left-[707px]"/>
      <img src="/arrow3.png" className="absolute top-[1209px] left-[707px]"/>

      <p className="absolute top-[1279px] left-[512px] font-[Product Sans] font-bold text-[60px] leading-[150%] tracking-[-2.2%] text-[#5F5F5F]">Get To Know Us!</p>
      {/* <p className="absolute top-[1444px] left-[592px] font-[Product Sans] font-bold text-[50px] leading-[150%] tracking-[-2.2%] text-[#5F5F5F]">Our Mission</p>
      <img src="/blue-line.png" className="absolute top-[1540px] left-[624px]"></img> */}
    </section>
  );
}
