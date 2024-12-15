import { getBooks } from "@/services/getBooks";
import { BooksProvider } from "@/app/context";
import PageContent from "@/components/PageContent";

const Book = async () => {
  const books = await getBooks();

  return (
    <BooksProvider books={books}>
      <PageContent />
    </BooksProvider>
  );
};

export default Book;
