export default function Stats() {

  return (
      <section className="relative py-12 sm:py-16 md:py-20 items-center">
        {/* <img src="/Group.png" alt="" aria-hidden="true" className="pointer-events-none select-none absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto w-[92%] max-w-5xl opacity-70" /> */}

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 place-items-center">
            <div className="flex flex-col items-center text-center">
              <img src="/years.png" alt="Years" className="w-24 sm:w-28 md:w-32 h-auto" />
              <p className="mt-3 font-[Product Sans] text-lg sm:text-xl md:text-2xl text-[#5F5F5F]">Years</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src="/events.png" alt="Events" className="w-24 sm:w-28 md:w-32 h-auto" />
              <p className="mt-3 font-[Product Sans] text-lg sm:text-xl md:text-2xl text-[#5F5F5F]">Events</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src="/members.png" alt="Community Members" className="w-24 sm:w-28 md:w-32 h-auto" />
              <p className="mt-3 font-[Product Sans] text-lg sm:text-xl md:text-2xl text-[#5F5F5F]">Community<br></br> Members</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src="/attendees.png" alt="Attendees" className="w-24 sm:w-28 md:w-32 h-auto" />
              <p className="mt-3 font-[Product Sans] text-lg sm:text-xl md:text-2xl text-[#5F5F5F]">Attendees</p>
            </div>
          </div>
          <br></br><br></br><br></br><br></br>
        </div>
      </section>
  );
}
