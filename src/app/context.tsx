"use client";

import { createContext, useContext, useState } from "react";
import { bookType } from "@/type";

interface BooksContextType {
  books: bookType[] | null;
  setBooks: (books: bookType[] | null) => void;
}

const BooksContext = createContext<BooksContextType | null>(null);

export function BooksProvider({
  children,
  initialBooks,
}: {
  children: React.ReactNode;
  initialBooks: bookType[] | null;
}) {
  const [books, setBooks] = useState<bookType[] | null>(initialBooks);

  return <BooksContext.Provider value={{ books, setBooks }}>{children}</BooksContext.Provider>;
}

export function useBooksContext() {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooksContext must be used within a BooksProvider");
  }
  return context;
}
