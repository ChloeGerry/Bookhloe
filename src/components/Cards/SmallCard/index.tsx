"use client";

import Link from "next/link";

type SmallCardProps = {
  id: number;
  authorFirstname: string;
  authorLastname?: string;
  title: string;
  coverUrl: string;
  bought: boolean;
  read: boolean;
  grade: string | null;
};

const SmallCard = ({
  id,
  authorFirstname,
  authorLastname,
  title,
  coverUrl,
  bought,
  read,
  grade,
}: SmallCardProps) => {
  let cardColor = "";

  if (bought && read) {
    cardColor = "border-light-lavender";
  } else if (bought && !read) {
    cardColor = "border-light-pink";
  } else {
    cardColor = "border-light-blue";
  }

  return (
    <Link href={`/book/${id}`} className={`flex w-full gap-8 justify-around items-center`}>
      <article
        className={`flex w-full rounded-small border-2 ${cardColor} bg-[#FDF8F7] py-6 px-8 gap-8 justify-around items-center`}
      >
        <img
          src={coverUrl}
          alt="Book cover"
          className="!w-16 !h-100 object-contain rounded-extraSmall"
        />
        <div className="flex flex-col gap-2 items-end">
          <h3 className="text-gray-900 font-bold">{title}</h3>
          <h4 className="text-gray-900">{authorFirstname + " " + authorLastname}</h4>
          {read && <p className="self-end text-white p-1 rounded-md bg-lavender">{grade}/20</p>}
        </div>
      </article>
    </Link>
  );
};

export default SmallCard;
