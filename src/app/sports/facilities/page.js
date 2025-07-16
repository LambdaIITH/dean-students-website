// app/sports/facilities/page.tsx
import Facility from "../../../components/sports/facilities/Facility";

export default function FacilitiesPage() {
  const facilitiesList = [
    {
      id: 1,
      imgSrc: "/football.jpg",
      title: "Football",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt consequatur omnis...",
      flip: true,
    },
    {
      id: 2,
      imgSrc: "/football.jpg",
      title: "Basketball",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt consequatur omnis...",
      flip: false,
    },
    {
      id: 3,
      imgSrc: "/football.jpg",
      title: "Tennis",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt consequatur omnis...",
      flip: true,
    },
    // Add more facilities as needed
  ];

  return (
    <section className="py-10">
      <h1 className="font-bold text-4xl text-center text-[#d1402a] underline underline-offset-8 decoration-[#f58a42] mb-12">
        Sports Facilities
      </h1>
      <div className="flex flex-col gap-6">
        {facilitiesList.map((facility) => (
          <Facility key={facility.id} {...facility} />
        ))}
      </div>
    </section>
  );
}
