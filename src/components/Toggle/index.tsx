import { twMerge } from "tailwind-merge";

type ToogleProps = {
  isTriggered: boolean;
  onClick: () => void;
};

const Toggle = ({ isTriggered, onClick }: ToogleProps) => {
  return (
    <div className={twMerge("flex items-center", isTriggered ? "justify-end" : "justify-start")}>
      <div className="bg-gray-900 w-16 h-8 rounded-3xl" />
      <div
        onClick={onClick}
        className={twMerge(
          "absolute w-6 h-6 rounded-full cursor-pointer ease-in-out duration-150",
          isTriggered ? "mr-1 bg-neutral-400" : "ml-1 bg-white"
        )}
      />
    </div>
  );
};

export default Toggle;
