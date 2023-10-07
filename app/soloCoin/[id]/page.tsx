"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Bugatti } from "@/public/assets";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useStore } from "@/app/(store)/store";
import { useAddCoin } from "@/app/(store)/store";
import toast from "react-hot-toast";

type Params = {
  params: {
    id: string;
  };
};

type CoinData = {
  name: string;
  iconUrl: string;
  color: string;
  change: string;
  numberOfExchanges: number;
  numberOfMarkets: number;
  rank: number;
  price: string;
  websiteUrl: string;
  symbol: string;
  marketCap: string;
  links: string[];
  "24hVolume": string;
  description: string;
};

const SoloCoin = ({ params: { id } }: Params) => {
  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
    },
    headers: {
      "X-RapidAPI-Key": "8b7fa490cbmsh7d16921daddf254p1aa282jsn224d41edb479",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const addCoin = useAddCoin();

  const [coin, setCoin] = useState<CoinData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCoin = async (id: string) => {
      try {
        const response = await axios.request(options);
        const userCoin = response.data.data.coin;

        if (userCoin) {
          setCoin(userCoin);
        }

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getCoin(id);
  }, [id, options]);

  const [figures, setFigures] = useState(false);

  const handleTrackCoin = () => {
    const coinDetails = {
      name: coin?.name || "",
      price: coin?.price || "",
      img: coin?.iconUrl || "",
      symbol: coin?.symbol || "",
      color: coin?.color || "",
    };

    addCoin(id, coinDetails);
    toast(`Fantastic! ${coin?.name} is in your tracked coins folder now.`);
  };

  return (
    <div className=" h-screen lg:pt-[15vh] w-full flex justify-center items-center">
      <div className=" bg-neutral-500 bg-opacity-60 rounded-xl w-full lg:w-4/12 h-5/6 flex flex-col items-center">
        {isLoading ? (
          <div className=" w-full h-full flex justify-center items-center text-2xl">
            Just a minute...
          </div>
        ) : (
          <div className=" w-full h-fit lg:h-full px-8 py-3 flex flex-col items-center">
            <h1 className="w-full text-center text-2xl text-neutral-100 flex justify-center items-center">
              {coin?.name}
            </h1>
            <div
              style={{ backgroundColor: coin?.color }}
              className="w-full flex justify-center items-center p-2 rounded-xl my-2"
            >
              <div className=" rounded-full p-2 bg-neutral-200">
                <Image
                  src={coin?.iconUrl || Bugatti}
                  width={100}
                  height={100}
                  alt="coinimg"
                />
              </div>
            </div>
            <p className=" w-full flex justify-center items-center text-lg text-neutral-100">
              Rank: {coin?.rank}
            </p>
            <div className=" w-full h-[50%] my-2">
              {figures ? (
                <div className=" w-full h-fit flex flex-col text-neutral-100">
                  <p className=" w-full px-2 py-1 flex gap-1 items-center justify-center">
                    daily volume: {coin?.["24hVolume"]}
                  </p>
                  <p className=" w-full px-2 py-1 justify-center flex">
                    market cap: {coin?.marketCap}
                  </p>
                  <p className=" w-full px-2 py-1 justify-center flex">
                    total exchanges: {coin?.numberOfExchanges}
                  </p>
                  <p className=" w-full px-2 py-1 flex justify-center">
                    total markets: {coin?.numberOfMarkets}
                  </p>
                </div>
              ) : (
                <>
                  <div className=" flex flex-col">
                    <h1 className=" w-full text-center flex justify-center items-center text-2xl text-neutral-100 h-[30%] border-b">
                      About {coin?.name}
                    </h1>
                    <p className=" w-full h-[70%] flex justify-center text-center text-lg text-neutral-100">
                      {coin?.description}
                    </p>
                  </div>
                </>
              )}
              <div className=" w-full flex justify-center items-center">
                <button
                  onClick={(e) => setFigures((prev) => !prev)}
                  className=" text-xl hover:scale-95 hover:bg-neutral-200 hover:text-black transition duration-300 bg-neutral-600 text-white py-2 px-3 mt-2 rounded-md"
                >
                  {figures ? <>General Info</> : <>Tap for figures</>}
                </button>
              </div>
            </div>
            <p className=" w-full flex h-fit justify-center text-center text-lg text-neutral-100 border-b">
              {coin?.name} is currently available on {coin?.numberOfMarkets}{" "}
              markets now.
            </p>
            <div className=" w-full text-neutral-100 flex lg:flex-row flex-col justify-center items-center py-2 gap-3">
              <Link
                className=" bg-black rounded-xl px-3 py-1 lg:p-0 lg:bg-transparent"
                href="/search"
              >
                <IoReturnUpBackOutline size={30} color="white" />
              </Link>
              <button
                onClick={handleTrackCoin}
                style={{ backgroundColor: coin?.color }}
                className=" w-fit h-fit py-2 px-3 rounded-md"
              >
                Track {coin?.name}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SoloCoin;

{
  /* <div>
<p>Daily volume: {coin?.["24hVolume"]}</p>
<p>Market Cap:{coin?.marketCap}</p>
</div> */
}

{
  /* <p>Priced at:{coin?.price}</p> */
}
