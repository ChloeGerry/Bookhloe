import Link from "next/link";
import { bookhloeInformationsType, subtitlesType } from "@/type";
import { LISTE_DE_LECTURE } from "@/services/constant";

const LargeCard = ({ title, subtitles }: bookhloeInformationsType) => {
  const backgroundColor: string =
    title === LISTE_DE_LECTURE ? "bg-light-blue" : "bg-light-lavender";

  return (
    <article
      className={`flex flex-col justify-center font-alex-brush rounded-small p-4 w-full h-44 gap-6 ${backgroundColor} text-center lg:rounded-large lg:w-96 lg:h-80 lg:p-12 lg:gap-20`}
    >
      {title === LISTE_DE_LECTURE ? (
        <h2 className="text-4xl lg:text-5xl">{title}</h2>
      ) : (
        <Link href="/read-books" className="text-4xl lg:text-5xl">
          {title}
        </Link>
      )}
      {subtitles && (
        <div className="flex flex-col justify-center gap-2">
          {subtitles.map(({ title, href }: subtitlesType) => (
            <Link href={href} key={title} className="text-base lg:text-2xl font-yaldevi">
              {title}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
};

export default LargeCard;
