import Image from "next/Image";
export default function CardSmaller({ img, distance, location }) {
  return (
    <div
      className="flex items-center
      hover:bg-gray-100
      hover:scale-105
      transition
      duration-200
      transform
      ease-out
      m-2
      rounded-xl
      space-x-4
     mt-5"
    >
      <div className="relative h-16  w-16">
        <Image className="rounded-md" src="/../public/small.PNG" layout="fill" />
      </div>
      <div className="ml-5">
        <p>{location}</p>
        <p className="text-gray-400">{distance}</p>
      </div>
    </div>
  );
}
