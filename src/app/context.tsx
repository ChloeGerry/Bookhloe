"use client";

import { bookType } from "@/type";
import { createContext, useContext } from "react";

export const BooksContext = createContext<bookType[] | null>(null);

export function BooksProvider({
  children,
  books,
}: {
  children: React.ReactNode;
  books: bookType[] | null;
}) {
  return <BooksContext.Provider value={books}>{children}</BooksContext.Provider>;
}

export function useBooksContext() {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooksContext must be used within a BooksProvider");
  }
  return context;
}
