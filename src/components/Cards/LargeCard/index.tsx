import Link from "next/link";
import { bookhloeInformationsType, subtitlesType } from "@/type";
import { LISTE_DE_LECTURE } from "@/services/constant";

const LargeCard = ({ title, subtitles }: bookhloeInformationsType) => {
  const backgroundColor: string =
    title === LISTE_DE_LECTURE ? "bg-light-blue" : "bg-light-lavender";

  return (
    <article
      className={`flex flex-col justify-center gap-20 font-alex-brush rounded-large p-12 ${backgroundColor} text-center w-96 h-80`}
    >
      {title === LISTE_DE_LECTURE ? (
        <h2 className="text-5xl">{title}</h2>
      ) : (
        <Link href="/read-books" className="text-5xl">
          {title}
        </Link>
      )}
      {subtitles && (
        <div className="flex flex-col justify-center gap-2">
          {subtitles.map(({ title, href }: subtitlesType) => (
            <Link href={href} key={title} className="text-2xl font-yaldevi">
              {title}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
};

export default LargeCard;
