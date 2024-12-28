export const updateProgressBar = (currentPage: number, totalPages: number) =>
  Math.round((currentPage / totalPages) * 100);
