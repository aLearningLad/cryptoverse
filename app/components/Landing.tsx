"use client";

import { useMotionValue, useSpring, useInView } from "framer-motion";
import { LargeBtn } from ".";
import { useRef, useEffect } from "react";

interface AnimatedNumbersProps {
  value: number;
}

const AnimatedNumbers: React.FC<AnimatedNumbersProps> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const Landing = () => {
  return (
    <div className="w-full lg:px-0 lg:pt-[60px] h-fit pt-[100px] lg:h-[95vh] flex flex-col items-center justify-center">
      <div className="">
        <h2 className=" text-center text-xl lg:text-[70px] font-normal text-neutral-500">
          Find, Browse & Track <br />
          <h1 className=" text-6xl lg:py-5 font-bold bg-gradient-to-t from-slate-400 to-cyan-500 bg-clip-text text-transparent">
            Crypto.
          </h1>
        </h2>
        <div className=" flex flex-col gap-1 items-center h-[400px]">
          <p className=" text-center h-fit text-lg lg:text-[22px] font-500 w-7/12 text-neutral-500 font-sans pt-[20px]">
            Information at your fingertips. Track your favourite cryptos. Stay
            up to date with relevant news & continue to explore.
          </p>
          <div className=" text-md bg-gradient-to-b text-center from-orange-300 to-orange-700 bg-clip-text text-transparent">
            Built by HillSawft, powered by Typescript
          </div>
          <div className=" lg:w-4/12 w-full p-2 h-[160px] gap-[16px] flex lg:flex-row flex-col justify-center items-center">
            <div className="bg-gradient-to-b hover:scale-90 transition duration-300 ease-in-out bg-cyan-600 w-8/12 lg:w-full h-[64px] rounded-xl text-xl text-white hover:bg-white hover:text-cyan-800 hover:bg-none hover:border-[3px] hover:border-cyan-600">
              <LargeBtn title="Top 40" route="/top40" />
            </div>
            <div className="bg-gradient-to-b hover:scale-90 transition duration-300 ease-in-out bg-cyan-600 w-8/12 lg:w-full h-[64px] rounded-xl text-xl text-white hover:bg-white hover:text-cyan-800 hover:bg-none hover:border-[3px] hover:border-cyan-600">
              <LargeBtn title="News" route="/news" />
            </div>
          </div>
          <div className=" w-full h-[200px] flex justify-center items-center py-2 gap-5">
            <div className=" w-2/12 rounded-[20px] h-full hidden lg:flex flex-col items-center justify-center">
              <div className=" w-full justify-center items-center font-bold text-[48px] text-center text-neutral-600">
                <AnimatedNumbers value={10} />.
                <AnimatedNumbers value={5} />
                k+
              </div>
              <p className=" text-neutral-600 w-full text-center justify-center items-center">
                Currencies
              </p>
            </div>
            <div className="w-2/12 rounded-[20px] h-full hidden lg:flex flex-col items-center justify-center">
              <div className="w-full justify-center items-center font-bold text-[48px] text-center text-neutral-600">
                <AnimatedNumbers value={1} />.
                <AnimatedNumbers value={2} />
                k+
              </div>
              <p className="w-full text-center justify-center items-center text-neutral-600">
                Articles
              </p>
            </div>
            <div className="w-2/12 rounded-[20px] h-full hidden lg:flex flex-col items-center justify-center">
              <div className="w-full justify-center items-center font-bold text-[48px] text-center text-neutral-600">
                <AnimatedNumbers value={5} />
                00+
              </div>
              <p className="text-neutral-600 w-full text-center justify-center items-center">
                Users
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
