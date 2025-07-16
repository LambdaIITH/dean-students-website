"use client";

import Image from "next/image";

export default function ClubsPage() {
  const clubs = [
    {
      name: "Elan & nVision",
      description: "Techno‑cultural fest organisers",
      img: "/clubs/elan.jpg",
    },
    {
      name: "E‑Cell",
      description: "Entrepreneurship cell",
      img: "/clubs/ecell.jpg",
    },
    {
      name: "TedxIITH",
      description: "Ideas worth spreading",
      img: "/clubs/tedx.jpg",
    },
    {
      name: "Sunshine",
      description: "Counselling & well‑being group",
      img: "/clubs/sunshine.jpg",
    },
    {
      name: "Milan",
      description: "Inter‑hostel general champs fest",
      img: "/clubs/milan.jpg",
    },
    {
      name: "EBSB",
      description: "Cultural diversity club",
      img: "/clubs/ebsb.jpg",
    },
    {
      name: "Infocus",
      description: "Photography club",
      img: "/clubs/infocus.jpg",
    },
    {
      name: "Vibes",
      description: "Music & jam sessions club",
      img: "/clubs/vibes.jpg",
    },
    { name: "Shuffle", description: "Dance club", img: "/clubs/shuffle.jpg" },
    {
      name: "Gesture",
      description: "Art & crafts club",
      img: "/clubs/gesture.jpg",
    },
    {
      name: "AeroClub",
      description: "Aeronautics & drone design club",
      img: "/clubs/aeroclub.jpg",
    },
    {
      name: "Robotics",
      description: "Robotics & automation club",
      img: "/clubs/robotix.jpg",
    },
    {
      name: "Lambda",
      description: "Software dev club",
      img: "/clubs/lambda.jpg",
    },
    {
      name: "Kludge",
      description: "Information Technology and Networking club",
      img: "/clubs/kludge.jpg",
    },
    { name: "Epoch", description: "AI/ML club", img: "/clubs/epoch.jpg" },
  ];

  return (
    <main className="px-4 py-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#d1402a] underline underline-offset-8 decoration-[#f58a42] mb-6">
          Student Gymkhana Clubs
        </h1>
        <p className="text-[#171e27] text-lg leading-relaxed">
          The <strong>Student Gymkhana at IIT Hyderabad</strong> is the heart of
          student life, fostering a culture of excellence, leadership, and
          creativity. It comprises various councils including cultural,
          technical, and sports, each driving a range of events and activities
          through student-led clubs. The Gymkhana empowers students to explore
          interests, organize large-scale fests, represent IITH at national
          competitions, and promote mental well-being and inclusivity on campus.
        </p>
      </section>

      {/* Clubs Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clubs.map((c) => (
          <div
            key={c.name}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image src={c.img} alt={c.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-[#171e27]">{c.name}</h3>
              <p className="text-sm text-[#171e27]">{c.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
