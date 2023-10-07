"use client";

import { BsMenuButtonWide } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";

const MobileNav = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className=" lg:hidden flex h-fit fixed w-full">
      {mobileNav ? (
        <div className="px-3 text-white h-screen bg-black bg-opacity-80 flex flex-col gap-4 justify-center items-center w-full">
          <Link
            className=" w-full h-fit flex text-2xl rounded-xl justify-center py-3 bg-white text-black"
            href="/"
            onClick={() => setMobileNav((prev) => !prev)}
          >
            Home
          </Link>
          <Link
            className=" w-full h-fit flex text-2xl rounded-xl justify-center py-3 bg-white text-black"
            href="/search"
            onClick={() => setMobileNav((prev) => !prev)}
          >
            Search
          </Link>
          <Link
            className=" w-full h-fit flex text-2xl rounded-xl justify-center py-3 bg-white text-black"
            href="/about"
            onClick={() => setMobileNav((prev) => !prev)}
          >
            About
          </Link>
          <Link
            className=" w-full h-fit flex text-2xl rounded-xl justify-center py-3 bg-white text-black"
            href="/coins"
            onClick={() => setMobileNav((prev) => !prev)}
          >
            Coins
          </Link>
          <Link
            className=" w-full h-fit flex text-2xl rounded-xl justify-center py-3 bg-white text-black"
            href="/news"
            onClick={() => setMobileNav((prev) => !prev)}
          >
            News
          </Link>
          <div className=" w-full h-fit flex justify-center">
            <button
              onClick={() => setMobileNav((prev) => !prev)}
              className=" w-fit px-4 h-fit flex justify-center text-4xl bg-cyan-400 text-black rounded-full items-center p-3"
            >
              X
            </button>
          </div>
        </div>
      ) : (
        <div className=" h-fit w-full flex justify-end px-4 py-2 ">
          <button
            onClick={() => setMobileNav((prev) => !prev)}
            className="px-2 py-1"
          >
            <BsMenuButtonWide size={38} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
