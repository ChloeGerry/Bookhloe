type TertiaryTitleProps = {
  title: string;
};

const TertiaryTitle = ({ title }: TertiaryTitleProps) => {
  return <h3 className="text-gray-900 font-bold">{title}</h3>;
};

export default TertiaryTitle;
