import LargeCard from "@/components/Cards/LargeCard";
import { bookhloeInformations } from "@/services/bookhloeInformations";

const Bookhloe = () => {
  return (
    <>
      <h1 className="relative z-10 text-6xl text-center pt-14 font-alex-brush lg:pt-16 lg:text-7xl">
        Bookhloé
      </h1>
      <main className="flex flex-col items-center gap-7 relative z-10 my-20 mx-6 lg:flex-row lg:justify-center lg:gap-44 lg:my-88">
        {bookhloeInformations.map(({ title, subtitles }) => (
          <LargeCard key={title} title={title} subtitles={subtitles} />
        ))}
      </main>
    </>
  );
};

export default Bookhloe;
