"use client";

import { useStore } from "../(store)/store";
import { NewsPageTab } from "../components";
import Masonry from "react-masonry-css";
import { useState, useEffect } from "react";
import { Bugatti } from "@/public/assets";
import { NewsTabType } from "@/myTypes";

const breakPointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};
const News = () => {
  const fakeTiles = [1, 2, 3, 4, 5, 6, 7, 8];

  const [newsTabs, setNewsTabs] = useState<NewsTabType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const store = useStore();

  useEffect(() => {
    const getNews = async () => {
      const news = await store.useGetHomeNews();

      if (news) {
        setNewsTabs(news);
        setIsLoading(false);
      }
    };
    getNews();
  }, [store]);

  return (
    <div className="lg:px-24 px-0 h-[100vh] pt-[15vh] flex justify-center items-center newspage">
      {isLoading ? (
        <div className=" w-full flex h-full justify-center items-center text-3xl">
          Fetching latest articles...
        </div>
      ) : (
        <div className=" bg-neutral-300 justify-center rounded-xl flex gap-[35px] px-3 cursor-pointer py-3  flex-wrap overflow-auto w-11/12 h-5/6">
          {newsTabs?.map((item) => (
            <div
              key={item.name}
              className=" w-fit h-fit flex justify-center newstab bg-purple-300 bg-opacity-25 rounded-xl hover:scale-105 transition duration-300 even:bg-cyan-300 even:bg-opacity-30"
            >
              <NewsPageTab
                title={item.name}
                desc={item.desc}
                img={item?.image?.thumbnail?.contentUrl || Bugatti}
                link={item.url}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
