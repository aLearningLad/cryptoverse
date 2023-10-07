"use client";

import { useState, useEffect } from "react";
import { useStore } from "../(store)/store";
import { IoReturnUpBack } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { Bugatti } from "@/public/assets";
import millify from "millify";
import { coinType, newCoinsType, statResults } from "@/myTypes";

const Top40 = () => {
  const [coins, setCoins] = useState<coinType[]>([]);
  const [stats, setStats] = useState<statResults>();
  const [newCoins, setNewCoins] = useState<newCoinsType[]>([]);

  const store = useStore();

  useEffect(() => {
    const getTop40 = async () => {
      const data = await store.useGetTop40();
      const newestCoins = await store.useNewestCoins();

      const coins = data[0];
      const stats = data[1];

      setCoins(coins);
      setStats(stats);
      setNewCoins(newestCoins);
    };

    getTop40();
  }, [store]);

  return (
    <div className=" h-fit lg:h-[100vh] top40 text-white">
      <div className=" pt-[10vh] pb-[2vh] h-full flex justify-center items-center px-[20px]">
        <div className=" w-full lg:w-11/12 h-full bg-neutral-400 bg-opacity-20 rounded-2xl p-[30px] flex">
          <div className=" w-8/12 h-full p-[24px] bg-transparent hidden lg:flex flex-col">
            <div className=" h-[7%] w-full flex items-center justify-start px-3">
              <Link className=" h-full w-fit" href="/">
                <IoReturnUpBack size={30} color="black" />
              </Link>
            </div>
            <div className=" h-[93%] w-full bg-transparent">
              <div className=" w-full my-2 h-2/6 flex mb-[20px] py-4 rounded-2xl items-center justify-center gap-[22px]">
                <div className=" h-full w-[180px] px-[30px] bg-yellow-600 bg-opacity-80 rounded-2xl hover:bg-opacity-50 cursor-pointer hover:scale-95 transition duration-300 ease-in-out">
                  <h3 className=" h-3/6 w-full flex justify-center items-end text-3xl">
                    {stats?.total}
                  </h3>
                  <p className=" h-3/6 w-full flex justify-center">Total/s</p>
                </div>
                <div className=" h-full w-fit px-[30px] bg-cyan-700 bg-opacity-80 rounded-2xl hover:bg-opacity-50 cursor-pointer hover:scale-95 transition duration-300 ease-in-out">
                  <h3 className="h-3/6 w-full flex justify-center items-end text-3xl">
                    {stats?.totalExchanges}
                  </h3>
                  <p className="h-3/6 w-full flex justify-center">
                    Total Exchanges
                  </p>
                </div>
                <div className=" h-full hover:bg-opacity-50 cursor-pointer w-fit px-[30px] bg-purple-900 bg-opacity-80 rounded-2xl hover:scale-95 transition duration-300 ease-in-out">
                  <h3 className="h-3/6 w-full flex justify-center items-end text-3xl">
                    $
                    {millify(stats?.totalMarketCap as number, { precision: 3 })}
                  </h3>
                  <p className="h-3/6 w-full flex justify-center">Market Cap</p>
                </div>
              </div>
              <div className=" w-full h-4/6 bg-cyan-300 bg-opacity-30 flex rounded-2xl p-3">
                <div className=" w-7/12 h-full p-2 flex flex-col gap-3">
                  <div className=" h-1/2 w-full bg-neutral-300 bg-opacity-30 hover:bg-purple-200 rounded-xl flex ">
                    <div className=" w-6/12 h-full px-4 flex flex-col justify-center gap-2">
                      <div className=" w-full h-fit flex justify-between items-center text-neutral-600">
                        <h3>Status:</h3>
                        <p className=" flex w-full justify-center items-center gap-2">
                          Open
                          <div className="w-[9px] h-[9px] rounded-full bg-green-700" />{" "}
                        </p>
                      </div>
                    </div>
                    <div className="w-6/12 h-full flex flex-col justify-center items-center text-5xl text-neutral-600">
                      {stats?.totalCoins}
                      <h3 className=" text-sm">Coins in total</h3>
                    </div>
                  </div>
                  <div className=" h-fit w-full bg-transparent bg-neutral-200 bg-opacity-30 hover:bg-yellow-300 hover:bg-opacity-70 text-neutral-600 rounded-xl flex flex-col justify-center items-center">
                    <h1 className=" w-full flex justify-center text-xl">
                      Newest Coins
                    </h1>
                    <div className=" w-full flex ">
                      {newCoins?.map((coin) => (
                        <div
                          key={coin.iconUrl}
                          className=" w-full h-full mx-4 flex flex-col bg-transparent rounded-xl py-1 justify-center items-center"
                        >
                          <div className=" w-full flex justify-center">
                            <Image
                              src={coin.iconUrl}
                              alt="coinimg"
                              width={60}
                              height={60}
                              className=" rounded-xl"
                            />
                          </div>
                          <div className=" w-full flex justify-center items-start">
                            <p>{coin.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className=" w-5/12 h-full ">
                  <Link
                    className=" h-full w-full flex items-center justify-center hover:bg-pink-500 hover:bg-opacity-25 rounded-2xl"
                    href="/search"
                  >
                    <BsSearch size={200} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-4/12 h-full px-2 flex">
            <div className=" w-full h-full border-4 overflow-y-scroll bg-purple-400 hover:bg-opacity-50 rounded-2xl flex flex-col lg:overflow-auto">
              {coins?.map((coin) => (
                <div
                  key={coin.iconUrl}
                  className=" w-full h-fit my-2 flex py-3"
                >
                  <div className=" w-full items-center h-fit flex justify-center">
                    <p className=" mx-1 text-xl">{coin.rank}.</p>
                    <h1 className=" mr-2">{coin.name}</h1>
                    <Image
                      src={coin?.iconUrl || Bugatti}
                      width={30}
                      height={30}
                      alt="coinimg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top40;
