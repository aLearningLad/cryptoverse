"use client";

import { HotCoinTab } from ".";
import { useHomeHotCoins } from "@/utils/rapidapi";
import { useState, useEffect } from "react";
import { useStore } from "../(store)/store";
import { FooterCoinType } from "@/myTypes";

const FooterCoins = () => {
  const store = useStore();
  const [top4, setTop4] = useState<FooterCoinType[]>([]);
  const [coinsLoading, setCoinsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getTop4 = async () => {
      const results = await store.useHomeHotCoins();

      if (results) {
        setTop4(results);
        setCoinsLoading(false);
      }
    };
    getTop4();
  }, [store]);

  return (
    <div className="w-full xl:h-[65vh] hidden xl:flex flex-col">
      <h1 className=" w-full h-2/6 text-neutral-500 text-[36px]">
        Hot Coins This Week
      </h1>
      <div className="w-full px-1 py-1 flex justify-center items-start h-4/6">
        {coinsLoading ? (
          <div className=" w-full h-full flex justify-center items-center text-2xl">
            Fetching coins...
          </div>
        ) : (
          <div className=" w-full h-full flex gap-[20px] justify-center p-2">
            {top4.map((coin) => (
              <div key={coin.iconUrl}>
                <HotCoinTab
                  name={coin.name}
                  iconUrl={coin.iconUrl}
                  symbol={coin.symbol}
                  btcPrice={coin.btcPrice}
                  id={coin.uuid}
                  rank={coin.rank}
                  change={coin.change}
                  marketCap={coin.marketCap}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterCoins;
