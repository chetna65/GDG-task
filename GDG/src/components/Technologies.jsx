export default function Technologies() {
  const techs = [
    { name: "Android", img: "android.png" },
    { name: "Flutter", img: "flutter.png" },
    { name: "Firebase", img: "firebase.png" },
    { name: "Cloud", img: "cloud.png" },
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-semibold mb-8">Technologies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {techs.map((t, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-800 shadow rounded"
          >
            <img src={t.img} alt={t.name} className="mx-auto w-16 mb-4" />
            <p>{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
