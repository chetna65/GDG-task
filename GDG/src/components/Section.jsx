export default function Section({ title, text, img, reverse }) {
  return (
    <section
      className={`py-12 px-6 md:px-16 flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8`}
    >
      <img src={img} className="w-64 md:w-1/2" alt={title} />
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{text}</p>
      </div>
    </section>
  );
}
