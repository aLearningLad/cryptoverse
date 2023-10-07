"use client";

import toast from "react-hot-toast";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      toast("Subscribed! We'll be in touch!");
    } else {
      toast("Please include your email to subscribe");
    }

    setEmail("");
  };

  return (
    <div className="w-full h-[120px] lg:flex-row flex-col lg:h-[40%] flex justify-center items-center">
      <div className=" w-fulls border-black lg:gap-0 gap-3 lg:w-8/12 h-[70px] lg:h-4/6 border-[1px] items-center rounded-xl lg:flex-row flex-col flex px-1">
        <input
          type="email"
          placeholder="Email Address"
          className=" bg-transparent w-full h-fit py-4 lg:w-10/12 outline rounded-xl lg:outline-none px-2 text-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          onClick={handleSubmit}
          className=" w-fit h-fit bg-cyan-500 px-3 py-2 rounded-md text-xl font-semibold"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
