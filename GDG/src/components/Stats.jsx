export default function Stats() {
  const stats = [
    { value: "03+", label: "Years" },
    { value: "10+", label: "Events" },
    { value: "1K+", label: "Community Members" },
    { value: "200+", label: "Attendees" }
  ];

  function StatRing({ value, label }) {
    const radius = 48;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const gap = 10; // visual gap between segments
    const segment = circumference / 4 - gap;
    const offsets = [0, segment + gap, 2 * (segment + gap), 3 * (segment + gap)];
    const colors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"]; // Google colors

    return (
      <div className="flex flex-col items-center justify-center text-center select-none">
        <div className="relative h-[140px] w-[140px]">
          <svg
            className="h-full w-full rotate-[-90deg]"
            viewBox="0 0 220 220"
            fill="none"
          >
            <g transform="translate(110,110)">
              {offsets.map((offset, index) => (
                <circle
                  key={index}
                  r={radius}
                  cx={0}
                  cy={0}
                  stroke={colors[index]}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray={`${segment} ${circumference}`}
                  strokeDashoffset={circumference - offset}
                />
              ))}
            </g>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center rotate-0">
            <span className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
              {value}
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-[10rem]">
          {label}
        </p>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 place-items-center">
          {stats.map((s) => (
            <StatRing key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
