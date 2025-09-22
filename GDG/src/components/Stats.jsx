export default function Stats() {
  const data = [
    { num: "100+", label: "Events" },
    { num: "100+", label: "Members" },
    { num: "50+", label: "Speakers" },
    { num: "200+", label: "Sessions" },
  ];

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-wrap justify-center gap-12 text-center">
        {data.map((item, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold">{item.num}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
