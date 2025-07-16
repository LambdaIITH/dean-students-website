// components/sports/facilities/Facility.tsx
import Image from "next/image";

export default function Facility({ imgSrc, title, content, flip }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        flip ? "md:flex-row-reverse" : ""
      } items-center gap-6 bg-white rounded-2xl shadow-lg border border-[#d1402a]/10 p-6 mx-4 md:mx-10 mb-8 transition-transform hover:scale-[1.01]`}
    >
      <div className="flex-1 rounded-xl overflow-hidden shadow-md">
        <Image
          src={imgSrc}
          alt={title}
          width={600}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-[#9d0000] underline decoration-[#f58a42] decoration-4 underline-offset-4">
          {title}
        </h2>
        <p className="text-sm text-[#171e27] leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
