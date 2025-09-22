export default function FAQ() {
  const faqs = [
    { q: "What is GDG?", a: "GDG stands for Google Developer Groups..." },
    { q: "How can I join?", a: "You can join by registering online..." },
    { q: "Are events free?", a: "Yes, most GDG events are free..." },
  ];

  return (
    <section className="py-16 px-6 md:px-16">
      <h2 className="text-2xl font-semibold text-center mb-8">FAQs</h2>
      <div className="space-y-4 max-w-2xl mx-auto">
        {faqs.map((f, i) => (
          <details key={i} className="p-4 border rounded-lg">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
