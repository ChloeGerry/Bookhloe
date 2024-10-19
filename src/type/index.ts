export type bookhloeInformationsType = {
  title: string;
  subtitles?: subtitlesType[];
  href?: string[];
};

export type subtitlesType = {
  title: string;
  href: string;
};
