import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className=" h-full w-[55px] rounded-full p-1 bg-cyan-800 text-white flex justify-center items-center"
    >
      <h3 className=" text-xl">C</h3>
      <h1 className=" text-4xl">V</h1>
    </Link>
  );
};

export default Logo;
