"use client";

import { useBooksContext } from "@/app/context";
import SmallCard from "../Cards/SmallCard";
import { CurrentPageTypeEnum } from "@/type";

type CardContainerProps = {
  pageType: "readList" | "readBooks" | "whishlist";
};

const CardsContainer = ({ pageType }: CardContainerProps) => {
  const books = useBooksContext();

  const updatedTypes = {
    [CurrentPageTypeEnum.READ_LIST]: books?.filter(
      (book) => book.bought === true && book.read === false
    ),
    [CurrentPageTypeEnum.READ_BOOKS]: books?.filter((book) => book.read === true),
    [CurrentPageTypeEnum.WHISHLIST]: books?.filter((book) => book.bought === false),
  };

  const booksList = updatedTypes[pageType];

  return (
    <div className="flex flex-col mt-12 mx-4 mb-4 gap-6 justify-items-center relative z-10 md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-12 xl:m-14">
      {booksList &&
        booksList?.map(
          ({
            author_firstname,
            author_lastname,
            title,
            id,
            cover_picture_url,
            bought,
            read,
            grade,
          }) => {
            return (
              <SmallCard
                key={id}
                id={id}
                authorFirstname={author_firstname}
                authorLastname={author_lastname}
                title={title}
                coverUrl={cover_picture_url}
                bought={bought}
                read={read}
                grade={grade}
              />
            );
          }
        )}
    </div>
  );
};

export default CardsContainer;
