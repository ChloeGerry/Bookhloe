import { bookType } from "@/type";

export const updateBuyState = async (id: number, isBought: boolean): Promise<bookType | null> => {
  try {
    const result = await fetch(`http://localhost:3000/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isBought }),
    });

    const book = await result.json();

    if (!book) {
      return null;
    }

    return book;
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error when updating book buy status", error);
    }
    throw error;
  }
};
