// app/sports/facilities/page.js
import Facility from "../../../components/sports/facilities/Facility";

export default function FacilitiesPage() {
  const facilitiesList = [
    {
      id: 1,
      imgSrc: "/sports/gym.jpg",
      title: "Gymnasium",
      content:
        "IITH sports complex has a well‑equipped gymnasium catering to strength training and cardio workouts—used regularly by NSO students and professional trainers.",
      flip: true,
    },
    {
      id: 2,
      imgSrc: "/sports/football_cricket.jpg",
      title: "Football / Cricket Ground",
      content:
        "A spacious football‑cum‑cricket turf where inter‑department, inter‑hostel, and inter‑IIT matches are conducted throughout the year.",
      flip: false,
    },
    {
      id: 3,
      imgSrc: "/sports/basketball.jpg",
      title: "Basketball Court",
      content:
        "Outdoor full‑sized court regularly used for NSO sessions, intra‑campus tournaments and friendly matches.",
      flip: true,
    },
    {
      id: 4,
      imgSrc: "/sports/volleyball.jpg",
      title: "Volleyball Court",
      content:
        "Flood‑lit volleyball court for evening practice sessions and inter‑hostel competitions.",
      flip: false,
    },
    {
      id: 5,
      imgSrc: "/sports/tennis.jpg",
      title: "Tennis Court",
      content:
        "Lawn‑tennis courts equipped with lighting—well maintained for both training and competitions.",
      flip: true,
    },
    {
      id: 6,
      imgSrc: "/sports/badminton.jpg",
      title: "Badminton Courts",
      content:
        "Indoor badminton courts used for NSO badminton training and inter‑departmental leagues.",
      flip: false,
    },
    {
      id: 7,
      imgSrc: "/sports/athletics.jpg",
      title: "Athletics Track",
      content:
        "Dedicated athletics track supporting sprint, long‑jump, and other field events as part of NSO.",
      flip: true,
    },
    {
      id: 8,
      imgSrc: "/sports/aquatics.jpg",
      title: "Swimming Pool",
      content:
        "Standard swimming pool used for aquatic training sessions under qualified coaches.",
      flip: false,
    },
  ];

  return (
    <section className="py-10 px-4 space-y-12">
      {/* Intro Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-bold text-4xl text-[#d1402a] underline underline-offset-8 decoration-[#f58a42] mb-6">
          Sports Facilities at IITH
        </h1>
        <p className="text-[#171e27] text-lg leading-relaxed">
          The <strong>SNCC — Sports and Cultural Complex</strong> at IIT
          Hyderabad serves as the vibrant hub for students to engage in physical
          fitness, recreational activities, and cultural expression. With
          world-class infrastructure, flood-lit courts, and expert coaches, SNCC
          is central to the <strong>National Sports Organization (NSO)</strong>{" "}
          program, Inter‑IIT tournaments, and daily student fitness. Whether
          it’s training, competition, or unwinding after lectures—SNCC offers it
          all.
        </p>

        {/* Google Maps Button */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://maps.app.goo.gl/6vtq3uAh6UA2eUpG8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f58a42] hover:bg-[#d1402a] text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-200"
          >
            View SNCC on Google Maps
          </a>
        </div>
      </div>

      {/* Facility Cards */}
      <div className="flex flex-col gap-8">
        {facilitiesList.map((facility) => (
          <Facility key={facility.id} {...facility} />
        ))}
      </div>
    </section>
  );
}
