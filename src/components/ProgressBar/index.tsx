import { bookType } from "@/type";

type ProgressBraProps = {
  progressBar: number;
  bookState: {
    isBought: boolean;
    isRead: boolean;
    currentPage: number;
  };
  selectedBook: bookType;
};

const ProgressBar = ({ progressBar, bookState, selectedBook }: ProgressBraProps) => {
  return (
    <div
      className={`my-6 w-full justify-self-center bg-gradient-to-r from-indigo-500 from-${progressBar}% via-purple-500 via-30% to-pink to-90% h-7 rounded-full flex justify-center items-center text-sm text-white font-semibold ease-in-out duration-150 md:w-3/4`}
    >
      {bookState.currentPage} / {selectedBook.total_pages} pages
    </div>
  );
};

export default ProgressBar;
