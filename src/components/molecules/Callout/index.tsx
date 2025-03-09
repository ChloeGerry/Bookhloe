import Picture from "@/components/atoms/Picture";
import Text from "@/components/atoms/Text";

type CalloutProps = {
  icon: string;
  alt: string;
  iconClassName?: string;
  text: string;
  textClassName?: string;
};

const Callout = ({ icon, alt, iconClassName, text, textClassName }: CalloutProps) => {
  return (
    <div className="flex flex-row-reverse gap-4 items-center py-4 px-8 w-fit bg-red-200 rounded-md mt-6 justify-self-center">
      <Picture cover={icon} alt={alt} className={iconClassName} />
      <Text text={text} className={textClassName} />
    </div>
  );
};

export default Callout;
