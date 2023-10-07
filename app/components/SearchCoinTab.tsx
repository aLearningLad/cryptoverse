import Image from "next/image";

interface SearchCoinTabProps {
  img: string;
}

const SearchCoinTab: React.FC<SearchCoinTabProps> = ({ img }) => {
  return (
    <div className=" w-[230px] h-[150px] rounded-xl flex justify-center items-center">
      <Image
        src={img}
        alt="coinimg"
        width={130}
        height={130}
        className=" rounded-xl"
      />
    </div>
  );
};

export default SearchCoinTab;
