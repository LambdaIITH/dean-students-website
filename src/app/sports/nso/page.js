"use client";

import Image from "next/image";

export default function NSOPage() {
  const sports = [
    { name: "Football", image: "football.jpg" },
    { name: "Basketball", image: "basketball.jpeg" },
    { name: "Cricket", image: "cricket.webp" },
    { name: "Athletics", image: "athletics.avif" },
    { name: "Volleyball", image: "volleyball.jpeg" },
    { name: "Badminton", image: "badminton.jpg" },
    { name: "Tennis", image: "tennis.jpg" },
    { name: "Aquatics", image: "aquatics.jpg" },
    { name: "Table Tennis", image: "tabletennis.webp" },
    { name: "Hockey", image: "hockey.jpeg" },
    { name: "E‑Sports", image: "esports.jpeg" },
    { name: "Chess", image: "chess.jpeg" },
  ];

  const coordinators = [
    { role: "Faculty‑In‑Charge", name: "Rogers Mathew" },
    { role: "Sports Secretary", name: "Sameer Kendal" },
    { role: "Web Head", name: "Gadekar Shivendraraje" },
    { role: "Design Head", name: "Akshat Parashar" },
  ];

  return (
    <main className="px-4 py-10 space-y-12">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#d1402a] underline underline-offset-8 decoration-[#f58a42] mb-6">
          National Sports Organisation
        </h1>
        <p className="text-[#171e27] text-lg leading-relaxed">
          At IIT Hyderabad, the NSO program fosters a vibrant sports
          culture—both within campus and beyond. Through well-equipped
          facilities like gyms, courts, and fields, students participate in
          departmental, inter-hostel, inter-collegiate, and Inter‑IIT events.
          It’s a mandatory, credit-based two-semester program where students
          receive expert coaching and engage in structured training.
        </p>
      </section>

      {/* Sports Offered */}
      <section className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#9d0000] mb-4">
          Sports Offered
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {sports.map(({ name, image }) => (
            <div
              key={name}
              className="w-full aspect-square overflow-hidden rounded-lg border border-[#ddd] hover:scale-105 transition-transform duration-200"
            >
              <Image
                src={`/sports/${image}`}
                alt={name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why NSO */}
      <section className="max-w-3xl mx-auto text-[#171e27] space-y-4">
        <h2 className="text-2xl font-semibold text-[#9d0000]">Why NSO?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Enhances physical fitness, discipline & team spirit.</li>
          <li>Mandatory two-semester credit program for B.Tech students.</li>
          <li>Gateway to Inter‑IIT tournaments and inter-college events.</li>
          <li>
            Opportunity for leadership through captaining and organizing events.
          </li>
        </ul>
      </section>

      {/* NSO Team */}
      <section className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#9d0000] mb-4">NSO Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {coordinators.map((c) => (
            <div
              key={c.role}
              className="p-4 bg-[#f5f5f5] rounded-lg flex flex-col items-center"
            >
              <div className="h-16 w-16 bg-[#e0e0e0] rounded-full mb-3" />
              <span className="font-semibold text-lg text-[#171e27]">
                {c.name}
              </span>
              <span className="text-sm text-[#9d0000]">{c.role}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
