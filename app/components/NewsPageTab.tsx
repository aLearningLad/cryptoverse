import Image from "next/image";

interface NewsPageTabProps {
  title: string;
  desc: string;
  link: string;
  img: string;
}

const NewsPageTab: React.FC<NewsPageTabProps> = ({
  title,
  desc,
  link,
  img,
}) => {
  return (
    <div className="group w-full lg:w-[260px] min-h-[160px] py-3 max-h-fit rounded-xl items-center flex flex-col">
      <div className=" h-fit w-full flex justify-center">
        <Image
          className="w-fit rounded-lg"
          src={img}
          alt="articleimg"
          objectFit="cover"
          width={140}
          height={160}
        />
      </div>
      <div className=" h-fit w-full flex justify-start px-3 py-1">
        <h1 className=" overflow-auto text-neutral-700 font-sans">{title}</h1>
      </div>
      <div className=" w-full h-[70px]  justify-center items-center flex ">
        <button className=" lg:group-hover:p-3 lg:bg-transparent lg:group-hover:bg-neutral-700 bg-neutral-700 lg:p-0 p-4 lg:text-transparent text-white rounded-xl w-fit text-xl font-normal group-hover:text-white">
          <a className=" w-full h-full" target="_blank" href={link}>
            Open Article
          </a>
        </button>
      </div>
    </div>
  );
};

export default NewsPageTab;
