// app/sports/facilities/page.js
import Facility from "../../../components/sports/facilities/Facility";

export default function FacilitiesPage() {
  const facilitiesList = [
    {
      id: 1,
      imgSrc: "/sports/gym.jpeg",
      title: "Gymnasium",
      content:
        "IITH sports complex features a state‑of‑the‑art gymnasium with modern equipment for strength training, cardio, and functional fitness. It caters to beginners and advanced athletes alike and is regularly used by NSO students under the supervision of certified trainers. IITH sports complex features a state‑of‑the‑art gymnasium with modern equipment for strength training, cardio, and functional fitness. It caters to beginners and advanced athletes alike and is regularly used by NSO students under the supervision of certified trainers.",
      flip: false,
    },
    {
      id: 2,
      imgSrc: "/sports/football.jpg",
      title: "Football / Cricket Ground",
      content:
        "A large multi-purpose ground with well-maintained turf supporting both football and cricket. It serves as the venue for inter-hostel, inter-department, and Inter‑IIT matches, offering floodlights for evening play and space for practice drills and tournaments. A large multi-purpose ground with well-maintained turf supporting both football and cricket. It serves as the venue for inter-hostel, inter-department, and Inter‑IIT matches, offering floodlights for evening play and space for practice drills and tournaments.",
      flip: false,
    },
    {
      id: 3,
      imgSrc: "/sports/basketball.jpeg",
      title: "Basketball Court",
      content:
        "The outdoor basketball court is built to regulation size and hosts NSO training, campus leagues, and late evening matches. It is a central attraction during sports fests and is equipped for all‑weather performance. The outdoor basketball court is built to regulation size and hosts NSO training, campus leagues, and late evening matches. It is a central attraction during sports fests and is equipped for all‑weather performance.",
      flip: false,
    },
    {
      id: 4,
      imgSrc: "/sports/volleyball.jpeg",
      title: "Volleyball Court",
      content:
        "This flood‑lit outdoor court encourages competitive play throughout the day and night. It’s popular among hostels for intra-campus tournaments and recreational matches, offering a fast-paced experience with excellent surface quality. This flood‑lit outdoor court encourages competitive play throughout the day and night. It’s popular among hostels for intra-campus tournaments and recreational matches, offering a fast-paced experience with excellent surface quality.",
      flip: false,
    },
    {
      id: 5,
      imgSrc: "/sports/tennis.jpg",
      title: "Tennis Court",
      content:
        "Equipped with synthetic turf and lighting, the tennis courts are maintained to high standards. They provide opportunities for both training sessions and inter-institute matches, with support for NSO tennis modules and personal practice. Equipped with synthetic turf and lighting, the tennis courts are maintained to high standards. They provide opportunities for both training sessions and inter-institute matches, with support for NSO tennis modules and personal practice.",
      flip: false,
    },
    {
      id: 6,
      imgSrc: "/sports/badminton.jpg",
      title: "Badminton Courts",
      content:
        "The indoor badminton arena houses multiple synthetic courts with anti-slip flooring and proper ventilation. These are used daily by NSO batches, club players, and for conducting campus-level tournaments. The indoor badminton arena houses multiple synthetic courts with anti-slip flooring and proper ventilation. These are used daily by NSO batches, club players, and for conducting campus-level tournaments.",
      flip: false,
    },
    {
      id: 7,
      imgSrc: "/sports/athletics.avif",
      title: "Athletics Track",
      content:
        "A full athletics track with marked lanes and field zones for long jump, high jump, shot put, and more. It’s essential to the NSO athletics module and offers a training ground for track and field aspirants within the student community. A full athletics track with marked lanes and field zones for long jump, high jump, shot put, and more. It’s essential to the NSO athletics module and offers a training ground for track and field aspirants within the student community.",
      flip: false,
    },
    {
      id: 8,
      imgSrc: "/sports/aquatics.jpg",
      title: "Swimming Pool",
      content:
        "The Olympic-sized swimming pool is operational through most of the academic year and includes lanes for training and lap swimming. Certified coaches conduct regular aquatic sessions as part of NSO and prepare swimmers for competitive meets. The Olympic-sized swimming pool is operational through most of the academic year and includes lanes for training and lap swimming. Certified coaches conduct regular aquatic sessions as part of NSO and prepare swimmers for competitive meets.",
      flip: false,
    },
  ];

  return (
    <section className="py-10 px-4 space-y-12">
      {/* Intro Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-bold text-4xl text-black underline decoration-[#f58a42] underline-offset-8 mb-6">
          Sports Facilities at IITH
        </h1>
        <p className="text-[#171e27] text-lg leading-relaxed text-justify">
          The SNCC — Sports and Cultural Complex at IIT Hyderabad serves as the
          vibrant hub for students to engage in physical fitness, recreational
          activities, and cultural expression. With world-class infrastructure,
          flood-lit courts, and expert coaches, SNCC is central to the National
          Sports Organization (NSO) program, Inter‑IIT tournaments, and daily
          student fitness. Whether it’s training, competition, or unwinding
          after lectures—SNCC offers it all.
        </p>

        {/* Google Maps Embed */}
        <div className="overflow-hidden rounded-xl shadow-lg max-w-2xl mx-auto mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.0220539448983!2d78.1236086!3d17.601687599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf7dbedd3ba29%3A0x1cad1111bddef7e6!2sSNCC%20IIT%20Hyderabad!5e0!3m2!1sen!2sus!4v1752687990305!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
