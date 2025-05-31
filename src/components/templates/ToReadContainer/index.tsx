"use client";

import Title from "@/components/organisms/Header";
import CardsContainer from "@/components/CardsContainer";
import Pagination from "@/components/Pagination";
import { bookType } from "@/type";
import { useState } from "react";
import { getBooksToRead } from "@/services/getBooksToRead";
import { BoughtStatus, Lifecycle } from "@/services/type";
import { LIMIT, PAGE } from "@/utils/constant";

type ToReadContainerProps = {
  initialBooks: bookType[];
  totalItems: number;
};

const ToReadContainer = ({ initialBooks, totalItems }: ToReadContainerProps) => {
  const [books, setBooks] = useState(initialBooks);
  const [offset, setOffset] = useState(PAGE);
  const [page, setPage] = useState(PAGE);

  const totalPages = Math.ceil(totalItems / LIMIT);

  // TODO -> sortir la logique des 2 fonctions de pagination pour DRY

  const onClickDisplayPreviousPage = async (): Promise<void | false> => {
    const updatedOffset = offset === PAGE ? PAGE : offset - LIMIT;

    setPage(page - 1);
    setOffset(updatedOffset);

    const nextPageParams = {
      bought: BoughtStatus.BOUGHT,
      lifecycles: [Lifecycle.NOT_STARTED, Lifecycle.IN_PROGRESS],
      offset: updatedOffset,
    };

    const { books } = await getBooksToRead(
      nextPageParams.bought,
      nextPageParams.lifecycles[0],
      nextPageParams.lifecycles[1],
      nextPageParams.offset
    );

    if (!books) {
      return false;
    }

    setBooks(books);
  };

  const onClickDisplayNextPage = async (): Promise<void | false> => {
    const updatedOffset = offset === PAGE ? LIMIT : offset + LIMIT;

    setPage(page + 1);
    setOffset(updatedOffset);

    const nextPageParams = {
      bought: BoughtStatus.BOUGHT,
      lifecycles: [Lifecycle.NOT_STARTED, Lifecycle.IN_PROGRESS],
      offset: updatedOffset,
    };

    const { books } = await getBooksToRead(
      nextPageParams.bought,
      nextPageParams.lifecycles[0],
      nextPageParams.lifecycles[1],
      nextPageParams.offset
    );

    if (!books) {
      return false;
    }

    setBooks(books);
  };

  return (
    <>
      <Title title="Pile à lire" />
      <CardsContainer books={books} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        displayPreviousPage={onClickDisplayPreviousPage}
        displayNextPage={onClickDisplayNextPage}
      />
    </>
  );
};

export default ToReadContainer;
