import Title from "@/components/Title";
import CardsContainer from "@/components/CardsContainer";
import { BooksProvider } from "@/app/context";
import { getBooks } from "@/services/getBooks";
import { CurrentPageTypeEnum } from "@/type";

const Whishlist = async () => {
  const books = await getBooks();

  return (
    <>
      <Title title="Whishlist" />
      <BooksProvider books={books}>
        <CardsContainer pageType={CurrentPageTypeEnum.WHISHLIST} />
      </BooksProvider>
    </>
  );
};

export default Whishlist;
