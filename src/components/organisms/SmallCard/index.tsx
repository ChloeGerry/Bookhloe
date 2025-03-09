"use client";

import Link from "next/link";
import Grade from "@/components/atoms/Grade";
import Picture from "@/components/atoms/Picture";
import SecondaryTitle from "@/components/atoms/SecondaryTitle";
import TertiaryTitle from "@/components/atoms/TertiaryTitle";
import { Lifecycle } from "@/services/type";

type SmallCardProps = {
  id: number;
  authorFirstname: string;
  authorLastname?: string;
  title: string;
  coverUrl: string;
  read: Lifecycle;
  grade: number | null;
};

const SmallCard = ({
  id,
  authorFirstname,
  authorLastname,
  title,
  coverUrl,
  read,
  grade,
}: SmallCardProps) => {
  const isGradeVisible = read === Lifecycle.FINISHED && grade;

  return (
    <Link
      href={`/book/${id}`}
      className={`flex w-full gap-8 justify-around items-center transition-all duration-500 hover:scale-105`}
    >
      <article
        className={`flex w-full rounded-small border-[1px] border-neutral-400 bg-gradient-to-r from-indigo-100 to-violet-100 py-6 px-8 gap-8 justify-around 
        items-center`}
      >
        <Picture
          cover={coverUrl}
          alt="Book cover"
          className="!w-16 !h-100 object-contain rounded-extraSmall"
        />
        <div className="flex flex-col gap-2 items-end">
          <SecondaryTitle title={title} />
          <TertiaryTitle title={authorFirstname + " " + authorLastname} />
          {isGradeVisible && <Grade grade={grade} count={20} />}
        </div>
      </article>
    </Link>
  );
};

export default SmallCard;
