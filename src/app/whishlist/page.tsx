import Title from "@/components/Title";
import CardsContainer from "@/components/CardsContainer";
import { useBooks } from "@/hooks/useBooks";
import { bookType } from "@/type";

const Whishlist = async () => {
  const books: bookType[] | null = await useBooks();
  const wishlist = books?.filter((book) => book.bought === false);

  return (
    <>
      <Title title="Whishlist" />
      <CardsContainer booksList={wishlist} />
    </>
  );
};

export default Whishlist;
