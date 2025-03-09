import Link from "next/link";
import MainTitle from "@/components/atoms/MainTitle";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="relative z-10 pt-14 flex justify-center items-baseline gap-8">
      <Link href="/" className="text-2xl hover:animate-bounce">
        📖
      </Link>
      <MainTitle title={title} />
    </header>
  );
};

export default Header;
