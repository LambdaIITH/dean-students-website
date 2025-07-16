import Image from "next/image";

export default function Facility({ imgSrc, title, content, flip }) {
  return (
    <div className="flex justify-between p-4 gap-5 bg-white">
      {!flip && (
        <Image
          src={imgSrc}
          alt={title}
          width={400}
          height={100}
          className="object-contain"
        />
      )}
      <div className="flex flex-col gap-3">
        <div className="font-semibold text-xl px-4">{title}</div>
        <div className="h-full px-4">{content}</div>
      </div>
      {flip && (
        <Image
          src={imgSrc}
          alt={title}
          width={400}
          height={100}
          className="object-contain"
        />
      )}
    </div>
  );
}
