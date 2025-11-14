"use client"

export default function WhyChooseZentrek() {
  const items = [
    {
      icon: "💰",
      title: "Ultimate flexibility",
      desc: "You're in control, with free cancellation and payment options to satisfy any plan or budget.",
    },
    {
      icon: "🎉",
      title: "Memorable experiences",
      desc: "Browse and book tours and activities so incredible, you'll want to tell your friends.",
    },
    {
      icon: "💎",
      title: "Quality at our core",
      desc: "High‑quality standards. Millions of reviews. A tourz company.",
    },
    {
      icon: "🏆",
      title: "Award‑winning support",
      desc: "New plan? New place? No problem. We're here to help, 24/7.",
    },
  ];

  return (
    <section className="w-full py-20 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold text-[#1D2B53] mb-12">Why choose Tourz</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center px-6">
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-[#1D2B53]">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
