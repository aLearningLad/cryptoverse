const FooterContact = () => {
  return (
    <div className=" w-full h-fit lg:h-[80vh] flex flex-row items-center lg:flex-col justify-end">
      <div className=" h-fit lg:h-3/6 flex w-full gap-3 items-start lg:items-end">
        <div className=" w-full xl:w-3/12 mr-3 h-full flex flex-col items-start p-2">
          <h1 className=" text-2xl lg:flex hidden">About Us</h1>
          <p className=" font-sans lg:flex hidden text-neutral-800 text-start">
            Cryptoverse by HillSawft&copy; is an easy-to-use cryptocurrency
            tracking & news application. Find, track, learn about & buy.
          </p>
        </div>
        <div className=" w-fit h-fit lg:h-full hidden lg:flex flex-col items-start lg:p-2">
          <h1 className=" text-2xl">Keen to Chat?</h1>
          <p className="font-sans text-neutral-800">
            245 Hogwarts Ave, P.O 1289 Park City, Utah, United States
          </p>
          <p className="font-sans text-neutral-800">Tel: 012 987 4563</p>
          <p className="font-sans text-neutral-800">E.help@cryptoverse.com</p>
        </div>
        <div className=" w-3/12 h-full hidden xl:flex flex-col items-start p-2">
          <h1 className=" text-2xl">pH Group</h1>
          <p className="font-sans text-neutral-800">Software</p>
          <p className="font-sans text-neutral-800">Construction</p>
          <p className="font-sans text-neutral-800">Logistics</p>
          <p className="font-sans text-neutral-800">Real Estate</p>
        </div>
        <div className=" w-3/12 h-full hidden lg:flex flex-col items-start p-2">
          <h1 className=" text-2xl">My Account</h1>
          <p className="font-sans text-neutral-800">My Wallet</p>
          <p className="font-sans text-neutral-800">Settings</p>
          <p className="font-sans text-neutral-800">Tracked Coins</p>
        </div>
      </div>
      <div className=" h-1/6 w-full flex justify-between items-center">
        <div className=" h-full w-1/2 hidden lg:flex justify-start items-center font-sans text-neutral-800">
          &copy; Copyright - 2023 HillSawft - Designed by Clint - Powered by
          Typescript
        </div>
        <div className=" h-full w-1/2 hidden lg:flex justify-end items-center gap-3 font-sans text-neutral-500">
          <p className="font-sans text-neutral-800">Privacy Policy</p>
          <div className=" w-[2px] h-2/6 bg-neutral-500" />
          <p className="font-sans text-neutral-800">Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
