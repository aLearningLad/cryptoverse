"use client";

import { BsSearch } from "react-icons/bs";
import { SearchCoinTab } from "../components";
import { AiFillStar } from "react-icons/ai";
import { useSearch } from "../../utils/rapidapi";
import { useState } from "react";
import Link from "next/link";
import { SearchResultType } from "@/myTypes";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<SearchResultType[]>([]);

  const HandleSearch = async () => {
    const results = await useSearch(search);

    if (results) {
      setSearchResult(results);
      console.log(setSearchResult);
    }
  };

  return (
    <div className=" lg:px-24 px-3 h-[90vh] pt-[15vh] w-full search">
      <h1 className=" w-full flex text-center justify-center text-[40px] text-neutral-600 ">
        Search for a cryptocurrency
      </h1>
      <div className=" w-full h-[90%] flex flex-col items-center">
        <div className=" w-full flex justify-center items-center gap-3 h-[90px]">
          <input
            type="text"
            placeholder="eg. DogeCoin"
            className=" w-10/12 lg:w-7/12 px-7 py-2 h-[50px] rounded-xl outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={HandleSearch}>
            <BsSearch />
          </button>
        </div>
        <div className=" w-full h-[500px] flex justify-center items-center">
          <div className=" w-10/12 h-5/6 flex items-center overflow-auto gap-[44px]">
            {search.length > 2 ? (
              searchResult.map((item) => (
                <Link
                  key={item.iconUrl}
                  href={`soloCoin/${item.uuid}`}
                  className=" w-[250px] items-center h-[230px] flex even:bg-cyan-200 odd:bg-pink-400 lg:hover:bg-cyan-200 lg:hover:bg-opacity-60 lg:even:hover:bg-opacity-100 cursor-pointer lg:even:hover:bg-neutral-200 rounded-xl flex-col group "
                >
                  <SearchCoinTab img={item.iconUrl} />
                  <div className="w-full items-center justify-center gap-2 h-fit pt-5 lg:hidden lg:group-hover:flex transition duration-300">
                    <p className=" text-2xl text-center">{item.name}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className=" w-full h-full flex justify-center items-center text-5xl text-neutral-500">
                Pretty Empty here. No searches yet...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
