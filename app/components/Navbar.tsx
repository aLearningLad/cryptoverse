import Link from "next/link";
import { Logo } from ".";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className=" h-[10vh] z-10 px-24 hidden lg:flex items-center w-full fixed backdrop-blur-md">
      <div className=" w-4/12 h-full flex items-center py-2 gap-1">
        <Logo />
        <Link
          href="/"
          className=" text-4xl font-bold bg-gradient-to-t from-slate-400 to-cyan-500 bg-clip-text text-transparent"
        >
          Cryptoverse
        </Link>
      </div>
      <div className=" w-8/12 h-full flex items-center justify-center gap-2">
        <div className=" w-8/12 h-full flex items-center justify-end gap-[50px]">
          <Link
            className=" flex flex-col group h-full justify-center items-center gap-1 hover:scale-105 transition duration-300 ease-in-out"
            href="/"
          >
            Home
            <div className=" h-[5px] w-[5px] rounded-full bg-black hidden group-hover:flex transition duration-300 ease-in" />
          </Link>
          <Link href="/about">About</Link>
          <Link
            className=" flex flex-col group h-full justify-center items-center gap-1 hover:scale-105 transition duration-300 ease-in-out"
            href="/coins"
          >
            Coins
            <div className=" h-[5px] w-[5px] rounded-full bg-black hidden group-hover:flex transition duration-300 ease-in" />
          </Link>
          <Link
            className=" flex flex-col group h-full justify-center items-center gap-1 group hover:scale-105 transition duration-300 ease-in-out"
            href="/news"
          >
            News
            <div className=" h-[5px] w-[5px] rounded-full bg-black hidden group-hover:flex transition duration-300 ease-in" />
          </Link>

          <Link href="/search" className="">
            <BsSearch />
          </Link>
        </div>
        <button className=" w-4/12 h-full flex justify-end items-center">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
