type MainTitleProps = {
  title: string;
};

const MainTitle = ({ title }: MainTitleProps) => {
  return (
    <h1 className="text-6xl text-center font-alex-brush lg:pt-16 lg:text-7xl text-gray-900">
      {title}
    </h1>
  );
};

export default MainTitle;
