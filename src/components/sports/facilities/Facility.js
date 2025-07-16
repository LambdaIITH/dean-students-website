import Image from "next/image";

export default function Facility({ imgSrc, title, content, flip }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        flip ? "md:flex-row-reverse" : ""
      } items-center gap-6 bg-white rounded-2xl shadow-lg border border-[#d1402a]/10 p-6 mx-4 md:mx-10 mb-8 transition-transform hover:scale-[1.01]`}
    >
      {/* Smaller Image Section */}
      <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-md flex-shrink-0">
        <Image
          src={imgSrc}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Expanded Text Content */}
      <div className="w-full md:w-2/3 flex flex-col gap-3 text-justify">
        <h2 className="text-2xl font-bold text-black underline decoration-[#f58a42] decoration-4 underline-offset-4">
          {title}
        </h2>
        <p className="text-sm text-[#171e27] leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
