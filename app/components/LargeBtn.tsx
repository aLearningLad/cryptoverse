import Link from "next/link";

interface LargeBtnProps {
  title: string;
  route: string;
}

const LargeBtn: React.FC<LargeBtnProps> = ({ title, route }) => {
  return (
    <Link
      href={route}
      className=" w-full h-full rounded-md flex justify-center items-center bg-transparent "
    >
      {title}
    </Link>
  );
};

export default LargeBtn;
