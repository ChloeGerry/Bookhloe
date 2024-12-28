"use server";

import { bookType } from "@/type";

export const getBooks = async (): Promise<bookType[] | null> => {
  try {
    const result = await fetch(`http://localhost:3000/books`);
    const books = await result.json();

    if (!books) {
      return null;
    }

    return books;
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error when fetching books", error);
    }
    throw error;
  }
};
