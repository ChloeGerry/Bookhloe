"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useBooksContext } from "@/app/context";
import Title from "@/components/Title";
import Toggle from "@/components/Toggle";
import ProgressBar from "@/components/ProgressBar";
import { updateReadState } from "@/services/updateReadState";
import { updateBookGrade } from "@/services/updateBookGrade";
import { updateBuyState } from "@/services/updateBuyState";
import { useBooksUpdater } from "@/services/useBooksUpdater";
import { updateCurrentPage } from "@/services/updateCurrentPage";
import { bookType } from "@/type";
import { updateProgressBar } from "@/utils/updateProgressBar";
import { GRADE_REGEX } from "@/utils/constant";

// TODO créer un composant pour l'input

const PageContent = () => {
  useBooksUpdater();
  const params = useParams<{ id: string }>();

  const { books } = useBooksContext();
  const selectedBook = books?.find((book: bookType) => book.id === Number(params.id));

  if (!selectedBook) return null;

  const [bookState, setBookState] = useState({
    isBought: selectedBook.bought,
    isRead: selectedBook.read,
    currentPage: selectedBook.read_pages,
    currentGrade: selectedBook.grade,
  });

  // console.log("selectedBook", selectedBook);

  const bookProgress = updateProgressBar(bookState.currentPage, selectedBook.total_pages);

  const [grade, setGrade] = useState<string>();
  const [progressBar, setProgressBar] = useState<number>(bookProgress);

  const handleBookBuy = async () => {
    console.log("coucou");
    await updateBuyState(selectedBook.id, !bookState.isBought);

    setBookState({
      ...bookState,
      isBought: !bookState.isBought,
    });
  };

  const handleBookRead = async () => {
    setBookState({
      ...bookState,
      isRead: !bookState.isRead,
      currentPage: selectedBook.total_pages,
    });

    await updateReadState(selectedBook.id, !bookState.isRead);
    await updateCurrentPage(selectedBook.id, selectedBook.total_pages);
  };

  // TODO ajouter 1 message d'erreur ici aussi SB
  const handlePageUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!bookState.currentPage || bookState.currentPage > selectedBook.total_pages) return;

    const bookProgress = updateProgressBar(bookState.currentPage, selectedBook.total_pages);
    setProgressBar(bookProgress);

    const currentInput = document.getElementById("page") as HTMLInputElement;
    currentInput.value = "";

    await updateCurrentPage(selectedBook.id, bookState.currentPage);
  };

  const handleGradeChange = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!grade) return;

    // console.log("grade", grade);
    // console.log("GRADE_REGEX.test(grade)", GRADE_REGEX.test(grade));
    // console.log("selectedBook.bought", selectedBook.bought);
    // console.log("selectedBook.read", selectedBook.read);

    // TODO refacto + afficher un message d'erreur genre Callout

    if (GRADE_REGEX.test(grade) && selectedBook.bought && selectedBook.read) {
      setBookState({ ...bookState, currentGrade: grade });
      await updateBookGrade(selectedBook.id, Number(grade));
    } else {
      console.log("c'est pas cool");
    }
  };

  return (
    <>
      <Title title={selectedBook.title} />
      <div className="relative m-4 p-4 md:m-16 md:p-6 rounded-small border-[#EEC2BA] border-2 bg-[#FDF8F7] z-10">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center font-alex-brush text-gray-900 text-4xl">
            {selectedBook.author_firstname + " " + selectedBook.author_lastname}
          </h2>
          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
            {!bookState.isRead && (
              <div className="flex items-center gap-2">
                <p className="text-gray-900">Acheté</p>
                <Toggle isTriggered={bookState.isBought} onClick={handleBookBuy} />
              </div>
            )}
            {bookState.isBought && !bookState.isRead && (
              <form
                className="flex items-center gap-2"
                onSubmit={(event) => {
                  handlePageUpdate(event);
                }}
              >
                <label htmlFor="page" className="text-gray-900">
                  Pages lues
                </label>
                <input
                  className="h-8 w-16 px-1 rounded-md border-[1px] border-gray-900 bg-white text-gray-900"
                  type="text"
                  id="page"
                  name="page"
                  onChange={(event) =>
                    setBookState({ ...bookState, currentPage: Number(event.target.value) })
                  }
                />
              </form>
            )}
            <div className="flex items-center gap-2">
              <p className="text-gray-900">Lu</p>
              <Toggle isTriggered={bookState.isRead} onClick={handleBookRead} />
            </div>
            {bookState.isRead && !bookState.currentGrade && (
              <form
                className="flex items-center gap-2"
                onSubmit={(event) => handleGradeChange(event)}
              >
                <label htmlFor="grade" className="text-gray-900">
                  Note
                </label>
                <input
                  className="h-8 w-16 px-1 rounded-md border-[1px] border-gray-900 bg-white text-gray-900"
                  type="text"
                  id="grade"
                  name="grade"
                  onChange={(event) => setGrade(event.target.value)}
                />
              </form>
            )}
            {bookState.currentGrade && (
              <p className="items-start w-fit text-white p-1 rounded-md bg-lavender">
                {bookState.currentGrade}/20
              </p>
            )}
          </div>
        </div>
        {bookState.isBought && (
          <ProgressBar
            bookState={bookState}
            selectedBook={selectedBook}
            progressBar={progressBar}
          />
        )}
        <div className="flex flex-col mt-6 gap-4 md:gap-0 md:mt-0 md:flex-row justify-around items-center">
          <img
            src={selectedBook.cover_picture_url}
            alt={selectedBook.title}
            className="object-contain w-40 md:w-52 rounded-md"
          />
          <p className="md:p-6 text-gray-900">{selectedBook.synopsis}</p>
        </div>
      </div>
    </>
  );
};

export default PageContent;
