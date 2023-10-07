"use client";

import { useState, useEffect } from "react";
import { useStore } from "../(store)/store";
import Image from "next/image";
import millify from "millify";
import Link from "next/link";
import toast from "react-hot-toast";

const Coins = () => {
  const userCoins = useStore((store) => store.trackedCoins);
  const removeFromTrackedCoins = useStore((store) => store.removeCoin);

  const handleCoinRemoval = (coinId: string) => {
    removeFromTrackedCoins(coinId);
    toast(`Coin removed`);
  };

  return (
    <div className=" px-1 lg:px-24 h-screen pt-[90px] pb-4 flex justify-center items-center text-2xl text-neutral-900">
      {userCoins.length > 0 ? (
        <div className=" w-full p-2 h-full overflow-auto bg-neutral-200 rounded-2xl">
          <div className=" flex flex-wrap h-fit gap-4 items-center justify-center w-full">
            {userCoins.map((coin: any) => (
              <div
                key={coin.details.name}
                style={{ borderColor: coin.details.color }}
                className=" w-full lg:w-[420px] hover:scale-90 transition duration-300 flex flex-col min-h-[380px] border-[20px] rounded-3xl"
              >
                <div className=" h-[200px] flex justify-center items-center w-full">
                  <Image
                    src={coin.details.img}
                    width={150}
                    height={150}
                    objectFit="cover"
                    className=""
                    alt="coinImg"
                  />
                </div>
                <p className=" w-full h-fit py-1 flex justify-center items-center text-xl">
                  {coin.details.name}
                </p>
                <p className=" w-full h-fit py-1 flex justify-center items-center text-xl">
                  ${millify(coin.details.price as number, { precision: 2 })}
                </p>
                <section className=" w-full flex justify-center h-fit">
                  <button
                    onClick={() => handleCoinRemoval(coin.id)}
                    className=" w-fit px-8 py-3 bg-purple-500 text-white text-2xl rounded-xl hover:bg-black transition duration-300"
                  >
                    Stop Tracking
                  </button>
                </section>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className=" w-fit h-fit text-3xl">
          You {"don't"} currently have any tracked cryptos. You can track as
          many coins as you want!
        </div>
      )}
    </div>
  );
};

export default Coins;

{
  /*
   You {"don't"} currently have any tracked cryptos. You can track up to 4 coins at a time
    */
}
