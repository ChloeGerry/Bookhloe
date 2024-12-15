import Title from "@/components/Title";
import CardsContainer from "@/components/CardsContainer";
import { BooksProvider } from "@/app/context";
import { getBooks } from "@/services/getBooks";
import { CurrentPageTypeEnum } from "@/type";

const ReadList = async () => {
  const books = await getBooks();

  return (
    <>
      <Title title="Pile à lire" />
      <BooksProvider books={books}>
        <CardsContainer pageType={CurrentPageTypeEnum.READ_LIST} />
      </BooksProvider>
    </>
  );
};

export default ReadList;
