import LargeCard from "@/components/Cards/LargeCard";
import { bookhloeInformations } from "@/services/bookhloeInformations";

const Bookhloe = () => {
  return (
    <>
      <h1 className="text-6xl text-center pt-16 font-alex-brush">Bookhloé</h1>
      <main className="flex justify-center gap-44 my-94px relative z-10">
        {bookhloeInformations.map(({ title, subtitles }) => (
          <LargeCard key={title} title={title} subtitles={subtitles} />
        ))}
      </main>
    </>
  );
};

export default Bookhloe;
