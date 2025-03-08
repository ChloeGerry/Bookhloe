type GradeProps = {
  grade: number;
  count: number;
};

const Grade = ({ grade, count }: GradeProps) => {
  return (
    <p className="self-end text-white py-1 px-3 rounded-md bg-neutral-500">
      {grade}/{count}
    </p>
  );
};

export default Grade;
