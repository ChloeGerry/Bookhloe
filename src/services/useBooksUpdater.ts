import { useEffect } from "react";
import { useBooksContext } from "@/app/context";
import { getBooks } from "@/services/getBooks";

export const useBooksUpdater = () => {
  const { setBooks } = useBooksContext();

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getBooks();
      setBooks(books);
    };

    fetchBooks();
  }, [setBooks]);

  return null;
};
