import { bookType } from "@/type";

export const useBooks = async (): Promise<bookType[] | null | undefined> => {
  try {
    const result = await fetch("http://localhost:3000/books");
    const books = await result.json();

    if (!books) {
      return null;
    }

    return books;
  } catch (error) {
    console.log("Error when fetching books", error);
  }
};
