import Image from "next/image";

interface HomeNewsSlideProps {
  title: string;
  img: string;
  desc: string;
  link: string;
}

const HomeNewsSlide: React.FC<HomeNewsSlideProps> = ({
  title,
  img,
  desc,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className=" w-[75vw] p-10 mr-[20px] h-full flex"
    >
      <div className=" w-3/12 h-fit lg:h-full flex items-center justify-end">
        <div className="relative h-2/6 w-6/12 hidden lg:flex justify-end">
          <Image
            src={img}
            alt="newsimg"
            fill
            objectFit="cover"
            className=" rounded-xl"
          />
        </div>
      </div>
      <div className=" w-8/12 h-fit lg:h-full flex flex-col p-5">
        <div className="w-full h-fit flex items-start text-4xl font-sans font-semibold text-neutral-600">
          {title}
        </div>
        <p className=" w-full h-4/6 hidden lg:flex items-start font-sans text-neutral-600">
          {desc}
        </p>
        <a className=" text-xl" href="/">
          Read More...
        </a>
      </div>
    </a>
  );
};

export default HomeNewsSlide;
