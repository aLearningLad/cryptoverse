import Image from "next/image";
import millify from "millify";

interface HotCoinTabProps {
  id: string;
  name: string;
  symbol: string;
  iconUrl: string;
  btcPrice: string | number;
  rank: number;
  marketCap: string | number;
  change: string;
}

const HotCoinTab: React.FC<HotCoinTabProps> = ({
  id,
  name,
  symbol,
  iconUrl,
  btcPrice,
  rank,
  marketCap,
  change,
}) => {
  return (
    <div className=" h-full w-[260px] rounded-lg px-3 bg-neutral-300 py-1 hover:scale-90 transition duration-300">
      <div className=" w-full h-2/6 flex justify-between items-center">
        <div className=" h-full flex items-center text-xl gap-1">
          <p className=" text-sm">{rank}.</p>
          {name}
        </div>
        <div className=" h-full flex items-center">
          <Image src={iconUrl} alt="coinsymbol" width={30} height={30} />
        </div>
      </div>
      <div className="w-full h-4/6 flex flex-col items-start justify-center gap-1 p-1">
        <h3 className="text-md">
          Price in Bitcoin:{" "}
          <p className=" text-xl">
            {millify(btcPrice as number, { precision: 5 })} BTC
          </p>
        </h3>
        <h3 className="text-md">
          Market Cap:{" "}
          <p className="text-xl">
            ${millify(marketCap as number, { precision: 4 })}
          </p>
        </h3>
        <h3 className="text-md">
          Change: <p className="text-xl">{change}%</p>
        </h3>
      </div>
    </div>
  );
};

export default HotCoinTab;
