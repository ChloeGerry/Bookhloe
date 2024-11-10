import Title from "@/components/Title";
import SmallCard from "@/components/Cards/SmallCard";
import { useBooks } from "@/hooks/useBooks";
import { bookType } from "@/type";

const Whishlist = async () => {
  const books: bookType[] | null | undefined = await useBooks();

  const wishlist = books?.filter((book) => book.bought === false);

  return (
    <>
      <Title title="Wishlist" />
      <div className="flex flex-col mt-12 mx-4 mb-4 gap-6 justify-items-center relative z-10 md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-12 xl:m-14">
        {wishlist &&
          wishlist?.map(
            ({ author_firstname, author_lastname, title, id, cover_picture_url, bought, read }) => {
              return (
                <SmallCard
                  key={id}
                  authorFirstname={author_firstname}
                  authorLastname={author_lastname}
                  title={title}
                  coverUrl={cover_picture_url}
                  bought={bought}
                  read={read}
                />
              );
            }
          )}
      </div>
    </>
  );
};

export default Whishlist;
