export type bookhloeInformationsType = {
  title: string;
  subtitles?: subtitlesType[];
  href?: string[];
};

export type subtitlesType = {
  title: string;
  href: string;
};

export type bookType = {
  title: string;
  author_firstname: string;
  author_lastname: string;
  id: number;
  cover_picture_url: string;
  bought: boolean;
  read: boolean;
  grade: string | null;
  synopsis: string;
  total_pages: number;
  read_pages: number;
};

export enum CurrentPageTypeEnum {
  READ_LIST = "readList",
  READ_BOOKS = "readBooks",
  WHISHLIST = "whishlist",
}
