import { bookType } from "@/type";

export const updateReadState = async (id: number, isRead: boolean): Promise<bookType | null> => {
  try {
    const result = await fetch(`http://localhost:3000/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isRead }),
    });

    const book = await result.json();

    if (!book) {
      return null;
    }

    return book;
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error when updating book read status", error);
    }
    throw error;
  }
};
