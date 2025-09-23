import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "What is GDG?",
      a:
        "Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.",
      color: "#EA4335",
    },
    {
      q: "How can you become a part of GDG ?",
      a:
        "We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.",
      color: "#34A853",
    },
    {
      q: "What does a GDG Lead do?",
      a:
        "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
      color: "#4285F4",
    },
    {
      q: "How is DSC related to Google?",
      a:
        "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
      color: "#FABB05",
    },
    {
      q: "How to reach us?",
      a: "Mail us at 'dsc.rknec@gmail.com' ",
      color: "#EA4335",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 max-w-3xl mx-auto p-4 md:p-8 lg:p-16">
      <p className="text-3xl sm:text-4xl font-bold text-center mb-8 font-[Product Sans] text-[#5F5F5F]">FAQs</p>
      <div className="space-y-5">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="">
              <button onClick={() => setOpenIndex(isOpen ? null : idx)} className="w-full text-left bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 px-4 sm:px-5 py-3 flex items-center gap-3 hover:shadow transition-shadow">
                <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="flex-1 font-[Product Sans] text-sm sm:text-base text-[#5F5F5F]">{item.q}</span>
                <span className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>˅</span>
              </button>

              {isOpen && (
                <div className="mt-3 flex justify-center">
                  <div className="rounded-xl border border-gray-200 shadow-sm p-4 relative max-w-md w-full">
                    <span
                      className="absolute left-0 top-3 bottom-3 w-1 rounded"
                      style={{ backgroundColor: item.color }}
                    />
                    <p className="pl-3 pr-1 text-xs sm:text-sm text-[#5F5F5F] leading-6">{item.a}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <br></br><br></br><br></br>
      </div>

    </section>
  );
}
