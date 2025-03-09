type SecondaryTitleProps = {
  title: string;
};

const SecondaryTitle = ({ title }: SecondaryTitleProps) => {
  return <h2 className="text-gray-900 font-bold">{title}</h2>;
};

export default SecondaryTitle;
