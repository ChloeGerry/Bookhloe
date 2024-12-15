import Title from "@/components/Title";
import CardsContainer from "@/components/CardsContainer";
import { useBooks } from "@/hooks/useBooks";
import { bookType } from "@/type";

const ReadList = async () => {
  const books: bookType[] | null = await useBooks();

  const readList = books?.filter((book) => book.bought === true && book.read === false);

  return (
    <>
      <Title title="Pile à lire" />
      <CardsContainer booksList={readList} />
    </>
  );
};

export default ReadList;
