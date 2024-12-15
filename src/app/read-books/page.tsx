import Title from "@/components/Title";
import CardsContainer from "@/components/CardsContainer";
import { useBooks } from "@/hooks/useBooks";
import { bookType } from "@/type";

const ReadBooks = async () => {
  const books: bookType[] | null = await useBooks();
  const readBooks = books?.filter((book) => book.read === true);

  return (
    <>
      <Title title="Livre lus" />
      <CardsContainer booksList={readBooks} />
    </>
  );
};

export default ReadBooks;
