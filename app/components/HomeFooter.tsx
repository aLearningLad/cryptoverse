import { FooterCoins, FooterContact, NewsLetter } from ".";

const HomeFooter = () => {
  return (
    <div className=" w-full h-fit lg:h-[160vh] px-8 lg:px-24 flex flex-col items-center">
      <NewsLetter />
      <FooterCoins />
      <FooterContact />
    </div>
  );
};

export default HomeFooter;
