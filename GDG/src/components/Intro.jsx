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
      <button className="bg-[#4285F4] font-bold text-[30px]">JOIN US</button>
    </section>
  );
}
