"use client";

import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { useStore } from "../(store)/store";
import { useState } from "react";
import millify from "millify";
import Link from "next/link";
import toast from "react-hot-toast";

interface HomeExploreCoinTabProps {
  title: string;
  img: string;
  price: number | string;
  symbol: string;
  color: string;
  id: string;
}

const HomeExploreCoinTab: React.FC<HomeExploreCoinTabProps> = ({
  title,
  img,
  price,
  symbol,
  color,
  id,
}) => {
  const [targetCoin, setTargetCoin] = useState({
    name: title,
    price: price,
    uuid: id,
    img: img,
    color: color,
    symbol: symbol,
  });

  const trackThisCoin = useStore((store) => store.addCoin);

  const handleSubmit = () => {
    const coinDetails = { name: title, price, img, symbol, color };

    trackThisCoin(id, coinDetails);
    toast(`You've added ${coinDetails.name} to your tracked coins`);
  };

  return (
    <div className=" w-full h-full rounded-lg flex flex-col">
      <div className=" rounded-xl h-4/6 w-full bg-none flex justify-center items-center">
        <Image src={img} alt="coinimg" width={60} height={50} className="" />
      </div>
      <div
        style={{ backgroundColor: color }}
        className=" h-2/6 w-full flex items-center flex-col rounded-xl"
      >
        <div className=" w-full h-fit text-xl flex justify-center px-1 items-center text-neutral-300">
          {title}
        </div>
        <div className=" h-full w-full flex flex-col justify-center gap-2 items-center text-neutral-200">
          <div className=" h-fit text-xl">
            ${millify(price as number, { precision: 3 })}
          </div>
          <div className=" flex px-2 pb-5 w-full h-fit justify-center gap-3">
            <span className=" w-1/2 h-fit flex justify-center">
              <button
                className="w-full flex justify-center h-fit py-1 bg-cyan-600 text-white rounded-xl"
                onClick={handleSubmit}
              >
                TRACK
              </button>
            </span>
            <span className="w-1/2 h-fit flex justify-center">
              <Link
                href={`soloCoin/${id}`}
                className="w-full flex justify-center h-fit py-1 bg-cyan-600 text-white rounded-xl"
              >
                <p>VISIT</p>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExploreCoinTab;
