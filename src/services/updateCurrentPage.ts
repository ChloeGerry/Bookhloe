import { bookType } from "@/type";

export const updateCurrentPage = async (
  id: number,
  currentPage: number
): Promise<bookType | null> => {
  try {
    const result = await fetch(`http://localhost:3000/books/${id}?currentPage=${currentPage}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const book = await result.json();

    if (!book) return null;

    return book;
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error when updating current page", error);
    }
    throw error;
  }
};
