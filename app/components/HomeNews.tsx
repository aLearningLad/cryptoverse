"use client";

import { useEffect, useState } from "react";
import HomeNewsSlide from "./HomeNewsSlide";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Bugatti } from "@/public/assets";
import { useStore } from "../(store)/store";
import { IHomeNews } from "@/myTypes";

const HomeNews = () => {
  const store = useStore();
  const [homeNews, setHomeNews] = useState<IHomeNews[]>([]);
  const [newsIsLoading, setNewsIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getNews = async () => {
      const news = await store.useGetHomeNews();

      if (news) {
        setHomeNews(news);
        setNewsIsLoading(false);
        console.log(homeNews);
      }
    };
    getNews();
  }, [store]);

  return (
    <div className="  lg:h-screen w-full px-2 hidden lg:flex flex-col justify-start items-center">
      <div className=" h-[70px] w-full">
        <h1 className="h-full flex lg:justify-normal justify-center items-center text-4xl text-neutral-600">
          News
        </h1>
      </div>
      {newsIsLoading ? (
        <div className=" w-full h-full flex  justify-center items-center text-2xl">
          Hold tight, {"we're"} loading news...
        </div>
      ) : (
        <div className=" h-fit lg:h-5/6 w-full gap-4 flex lg:overflow-auto">
          {homeNews.map((article) => (
            <div
              key={article.url}
              className=" w-full lg:w-[95vw] h-full p-5 lg:mr-[20px] hover:scale-90 transition duration-300 ease-in cursor-pointer bg-pink-200 bg-opacity-60 odd:bg-cyan-100 odd:bg-opacity-60 rounded-[36px]"
            >
              <HomeNewsSlide
                title={article.name}
                img={article?.image?.thumbnail?.contentUrl || Bugatti}
                desc={article.description}
                link={article.url}
              />
            </div>
          ))}
        </div>
      )}
      <div className=" h-1/6 w-full flex justify-center items-start py-2">
        <a
          className=" w-fit h-fit text-3xl font-sans flex items-center gap-1 text-neutral-600 transition duration-300 hover:bg-black hover:text-white p-2 rounded-xl"
          href="/news"
        >
          See More Articles
          <BsChevronDoubleRight />
        </a>
      </div>
    </div>
  );
};

export default HomeNews;
