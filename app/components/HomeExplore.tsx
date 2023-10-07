"use client";

import { HomeExploreCoinTab } from ".";
import { ImFilter } from "react-icons/im";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { usehomeExploreCoins } from "@/utils/rapidapi";
import { useEffect, useState } from "react";
import { useStore } from "../(store)/store";
import { HomeExploreCoin } from "@/myTypes";

const HomeExplore = () => {
  const store = useStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [coins, setCoins] = useState<HomeExploreCoin[]>([]);

  useEffect(() => {
    const getCoins = async () => {
      const myCoins = await store.usehomeExploreCoins();

      if (myCoins) {
        setCoins(myCoins);
        setIsLoading(false);
      }
    };
    getCoins();
  }, [coins, store]);

  return (
    <div className=" w-full h-screen p-2 hidden lg:flex flex-col justify-start gap-2">
      <div className=" h-[10vh] w-full flex lg:flex-row flex-col">
        <h1 className=" w-full lg:justify-normal justify-center lg:w-4/12 h-full flex items-center text-lg lg:text-4xl text-neutral-600">
          Explore Coins
        </h1>
        <div className=" w-8/12 h-full hidden lg:flex justify-center lg:justify-end gap-4 px-4 py-2">
          <Link
            className="group h-full flex flex-row gap-2 lg:gap-0 lg:flex-col justify-center items-center hover:bg-neutral-300 rounded-md px-4"
            href="/search"
          >
            <BsSearch size={24} />
            <p className="group-hover:text-neutral-500 lg:flex hidden">
              Go To Search
            </p>
          </Link>
        </div>
      </div>

      <div className=" h-[55vh] py-2 w-full lg:px-[40px] overflow-auto items-center flex">
        {isLoading ? (
          <div className=" w-full h-full flex justify-center items-center text-3xl">
            Just a minute while we fetch your coins...
          </div>
        ) : (
          <div className="h-full w-fit px-[20px] justify-center gap-[30px] items-center hidden lg:flex">
            {coins?.map((coin) => (
              <div
                key={coin.uuid}
                className=" m-2 explorecoin h-full w-[310px] rounded-2xl hover:scale-90 transition duration-300 ease-in-out"
              >
                <HomeExploreCoinTab
                  title={coin.name}
                  img={coin.iconUrl}
                  price={coin.price}
                  symbol="BTC"
                  color={coin.color}
                  id={coin.uuid}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className=" w-full h-fit flex justify-center text-2xl">
        Scroll for more {">>"}
      </div>
      <div className=" h-[15vh] w-full flex justify-center items-center">
        <Link
          className=" h-fit w-fit px-3 py-4 hover:text-neutral-900 hover:scale-105 transition duration-300 ease-in-out hover:bg-pink-400 hover:bg-opacity-30 bg-neutral-600 text-neutral-50 rounded-xl text-2xl"
          href="/coins"
        >
          See Your Tracked Collection
        </Link>
      </div>
    </div>
  );
};

export default HomeExplore;
