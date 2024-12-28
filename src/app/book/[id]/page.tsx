import { BooksProvider } from "@/app/context";
import PageContent from "@/components/PageContent";
import { getBooks } from "@/services/getBooks";

const Book = async () => {
  const books = await getBooks();

  return (
    <BooksProvider initialBooks={books}>
      <PageContent />
    </BooksProvider>
  );
};

export default Book;
