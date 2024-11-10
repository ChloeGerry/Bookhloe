import Link from "next/link";

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <div className="relative z-10 pt-14 flex justify-center items-baseline gap-4">
      <Link href="/" className="text-2xl">
        📖
      </Link>
      <h1 className="text-6xl text-center font-alex-brush lg:pt-16 lg:text-7xl text-gray-900">
        {title}
      </h1>
    </div>
  );
};

export default Title;
