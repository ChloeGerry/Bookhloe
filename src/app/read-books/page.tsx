import Title from "@/components/Title";
import CardsContainer from "@/components/CardsContainer";
import { BooksProvider } from "@/app/context";
import { getBooks } from "@/services/getBooks";
import { CurrentPageTypeEnum } from "@/type";

const ReadBooks = async () => {
  const books = await getBooks();

  return (
    <>
      <Title title="Livre lus" />
      <BooksProvider books={books}>
        <CardsContainer pageType={CurrentPageTypeEnum.READ_BOOKS} />
      </BooksProvider>
    </>
  );
};

export default ReadBooks;
