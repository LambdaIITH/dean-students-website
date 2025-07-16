import Facility from "../../../components/sports/facilities/Facility";

export default function FacilitiesPage() {
  const facilitiesList = [
    {
      id: 1,
      imgSrc: "/football.jpg",
      title: "Football",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt consequatur omnis? In ipsa nemo suscipit doloribus quam soluta fuga odit reprehenderit id aliquam, aliquid cum, provident adipisci molestiae harum maiores commodi alias magnam modi. Assumenda nesciunt atque quibusdam modi rem tempora, quisquam odit, eligendi ab in aliquam temporibus voluptatem, fugiat optio magnam quidem nostrum sapiente vel aperiam quos! Molestias commodi perferendis odit aspernatur magnam quibusdam libero qui expedita quaerat!",
      flip: true,
    },
    {
      id: 2,
      imgSrc: "/football.jpg",
      title: "Football",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt consequatur omnis? In ipsa nemo suscipit doloribus quam soluta fuga odit reprehenderit id aliquam, aliquid cum, provident adipisci molestiae harum maiores commodi alias magnam modi. Assumenda nesciunt atque quibusdam modi rem tempora, quisquam odit, eligendi ab in aliquam temporibus voluptatem, fugiat optio magnam quidem nostrum sapiente vel aperiam quos! Molestias commodi perferendis odit aspernatur magnam quibusdam libero qui expedita quaerat!",
      flip: false,
    },
    {
      id: 3,
      imgSrc: "/football.jpg",
      title: "Football",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt consequatur omnis? In ipsa nemo suscipit doloribus quam soluta fuga odit reprehenderit id aliquam, aliquid cum, provident adipisci molestiae harum maiores commodi alias magnam modi. Assumenda nesciunt atque quibusdam modi rem tempora, quisquam odit, eligendi ab in aliquam temporibus voluptatem, fugiat optio magnam quidem nostrum sapiente vel aperiam quos! Molestias commodi perferendis odit aspernatur magnam quibusdam libero qui expedita quaerat!",
      flip: false,
    },
    {
      id: 4,
      imgSrc: "/football.jpg",
      title: "Football",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt consequatur omnis? In ipsa nemo suscipit doloribus quam soluta fuga odit reprehenderit id aliquam, aliquid cum, provident adipisci molestiae harum maiores commodi alias magnam modi. Assumenda nesciunt atque quibusdam modi rem tempora, quisquam odit, eligendi ab in aliquam temporibus voluptatem, fugiat optio magnam quidem nostrum sapiente vel aperiam quos! Molestias commodi perferendis odit aspernatur magnam quibusdam libero qui expedita quaerat!",
      flip: true,
    },
    {
      id: 5,
      imgSrc: "/football.jpg",
      title: "Football",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt consequatur omnis? In ipsa nemo suscipit doloribus quam soluta fuga odit reprehenderit id aliquam, aliquid cum, provident adipisci molestiae harum maiores commodi alias magnam modi. Assumenda nesciunt atque quibusdam modi rem tempora, quisquam odit, eligendi ab in aliquam temporibus voluptatem, fugiat optio magnam quidem nostrum sapiente vel aperiam quos! Molestias commodi perferendis odit aspernatur magnam quibusdam libero qui expedita quaerat!",
      flip: false,
    },
    {
      id: 6,
      imgSrc: "/football.jpg",
      title: "Football",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt consequatur omnis? In ipsa nemo suscipit doloribus quam soluta fuga odit reprehenderit id aliquam, aliquid cum, provident adipisci molestiae harum maiores commodi alias magnam modi. Assumenda nesciunt atque quibusdam modi rem tempora, quisquam odit, eligendi ab in aliquam temporibus voluptatem, fugiat optio magnam quidem nostrum sapiente vel aperiam quos! Molestias commodi perferendis odit aspernatur magnam quibusdam libero qui expedita quaerat!",
      flip: true,
    },
    {
      id: 7,
      imgSrc: "/football.jpg",
      title: "Football",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt consequatur omnis? In ipsa nemo suscipit doloribus quam soluta fuga odit reprehenderit id aliquam, aliquid cum, provident adipisci molestiae harum maiores commodi alias magnam modi. Assumenda nesciunt atque quibusdam modi rem tempora, quisquam odit, eligendi ab in aliquam temporibus voluptatem, fugiat optio magnam quidem nostrum sapiente vel aperiam quos! Molestias commodi perferendis odit aspernatur magnam quibusdam libero qui expedita quaerat!",
      flip: true,
    },
  ];

  return (
    <div className="flex flex-col gap-2 py-5">
      <h1 className="font-semibold px-4 text-[3rem] text-center underline mb-6">
        Sports Facilities
      </h1>
      {facilitiesList.map((facility) => {
        return (
          <Facility
            key={facility.id}
            imgSrc={facility.imgSrc}
            title={facility.title}
            content={facility.content}
            flip={facility.flip}
          />
        );
      })}
    </div>
  );
}
