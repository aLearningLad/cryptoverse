import Image from "next/image";

interface HomeTop10CoinTabProps {
  name: string;
  iconUrl: string;
  id: string;
  verified: boolean;
  price: string;
  rank: number;
  dailyVolume: number;
  visit: string;
}
const HomeTop10CoinTab: React.FC<HomeTop10CoinTabProps> = ({
  name,
  iconUrl,
  id,
  verified,
  price,
  rank,
  dailyVolume,
}) => {
  return (
    <div className=" w-full h-[60px] flex items-center">
      <div className=" w-2/12 h-full flex flex-col items-center">
        <h3>Rank</h3>
        <p>{rank}</p>
      </div>
      <div className=" h-4/6  bg-black w-[1px] mr-2" />
      <div className=" w-10/12 flex items-center h-full justify-between">
        <div className=" w-2/12 flex gap-2 items-center h-5/6">
          {name}
          <Image src={iconUrl} alt="exchangeimg" width={30} height={30} />
        </div>
        <div className=" mx-3">
          <p>Price: {price}</p>
        </div>
        <div className=" mx-3">
          <p>Markets: {dailyVolume}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeTop10CoinTab;
