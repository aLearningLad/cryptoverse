import { Subscribe } from ".";

const NewsLetter = () => {
  return (
    <div className=" w-full h-fit lg:h-[45vh] flex flex-col lg:mb-0 mb-5 gap-2 justify-center">
      <div className="flex flex-col gap-2 justify-center w-full h-fit lg:h-2/6 items-center pb-4">
        <h1 className=" text-[54px] text-center">
          Subscribe to our Newsletter
        </h1>
        <p className="text-center text-neutral-700 font-sans">
          Get tailored news updates, coin suggestions, & discount tokens to get
          more value for your capital.
          <br className=" hidden lg:flex" /> Delivered every Monday & Friday
          morning.
        </p>
        <p className=" lg:flex hidden lg:text-[12px] underline p-2">
          Easily unsubscribe anytime
        </p>
      </div>
      <Subscribe />
    </div>
  );
};

export default NewsLetter;
