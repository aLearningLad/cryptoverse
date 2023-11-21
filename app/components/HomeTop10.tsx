"use client";

import HomeTop10CoinTab from "./HomeTop10CoinTab";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useStore } from "../(store)/store";
import Image from "next/image";
import { Bugatti } from "@/public/assets";
import millify from "millify";
import { HomeTop10Coin } from "@/myTypes";

const HomeTop10 = () => {
  const store = useStore();
  const [homeTop10, setHomeTop10] = useState<HomeTop10Coin[]>([]);
  const [tableIsLoading, setTableIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getTop10 = async () => {
      const top10 = await store.useHomeTop10Exchanges();

      if (top10) {
        setHomeTop10(top10);
        setTableIsLoading(false);
      }
    };
    getTop10();
  }, [store]);

  return (
    <div className=" h-screen w-full hidden lg:flex flex-col pt-[120px]">
      <div className=" h-[10vh] w-full">
        <h1 className=" h-full flex items-center text-4xl text-neutral-600">
          Top 3 Coin Exchanges
        </h1>
      </div>
      {tableIsLoading ? (
        <div className=" w-full h-full flex justify-center items-center text-2xl">
          Just a minute...
        </div>
      ) : (
        <div className=" w-full h-fit px-3 py-[14px] rounded-2xl bg-neutral-700 bg-opacity-10 mb-[16px]">
          <div className=" w-full h-full flex justify-center">
            <div className=" w-[90px] flex flex-col justify-center py-2 px-1 items-center mx-4 ">
              <div className=" w-fit h-full hidden lg:flex flex-col items-center">
                <div className=" h-[30px] w-full border-b-2 border-black text-xl">
                  Rank
                </div>
                <div>
                  {homeTop10.map((item) => (
                    <p
                      key={item.iconUrl}
                      className=" h-[90px] flex items-center"
                    >
                      {item.rank}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className=" w-[180px] mx-4 flex flex-col justify-center py-2 px-1 items-center">
              <div className=" w-fit h-full flex flex-col items-center">
                <div className=" h-[30px] w-full hidden lg:flex justify-center border-b-2 border-black text-xl">
                  Name
                </div>
                <div>
                  {homeTop10.map((item) => (
                    <p
                      key={item.iconUrl}
                      className=" h-[90px] flex gap-2 items-center justify-normal"
                    >
                      {item.name}
                      <Image
                        src={item.iconUrl || Bugatti}
                        alt="exchangeimg"
                        width={40}
                        height={30}
                        className=" rounded-full p-2"
                      />
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className=" w-[240px] mx-3 hidden lg:flex flex-col justify-center py-2 px-1 items-center ">
              <div className=" w-fit h-full flex flex-col items-center">
                <div className=" h-[30px] w-full flex justify-center border-b-2 border-black text-xl">
                  BTC Price in USD ($)
                </div>
                <div>
                  {homeTop10.map((item) => (
                    <p
                      key={item.iconUrl}
                      className=" h-[90px] flex gap-2 items-center"
                    >
                      {millify(item.price as number, { precision: 3 })}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className=" w-[190px] mx-3 hidden lg:flex flex-col justify-center py-2 px-1 items-center">
              <div className=" w-fit h-full flex flex-col items-center">
                <div className=" h-[30px] w-full hidden lg:flex items-center border-b-2 border-black text-xl">
                  No. Markets
                </div>
                <div className="">
                  {homeTop10.map((item) => (
                    <p
                      key={item.iconUrl}
                      className=" h-[90px] flex gap-2 items-center"
                    >
                      {item.numberOfMarkets}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className=" h-fit w-full flex justify-center items-center">
        <Link
          className=" h-fit w-fit px-3 py-4 hover:text-neutral-900 hover:scale-105 transition duration-300 ease-in-out hover:bg-cyan-700 hover:bg-opacity-30 bg-neutral-600 text-neutral-50 rounded-xl text-2xl"
          href="/top40"
        >
          See Top 40 Coins Instead
        </Link>
      </div>
    </div>
  );
};

export default HomeTop10;
