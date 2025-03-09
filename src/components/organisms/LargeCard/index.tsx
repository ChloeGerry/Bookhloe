import Link from "next/link";
import { BookhloePagesType } from "@/type";

const LargeCard = ({ title, href }: BookhloePagesType) => {
  return (
    <Link href={href} key={title} className="text-4xl lg:text-5xl">
      <article
        className={`flex flex-col justify-center font-alex-brush rounded-medium p-4 w-full h-44 transition-all duration-500 hover:scale-105
        gap-6 bg-gradient-to-r from-indigo-100 to-violet-100 text-center lg:rounded-large lg:w-96 lg:h-80 lg:p-12`}
      >
        {title}
      </article>
    </Link>
  );
};

export default LargeCard;
