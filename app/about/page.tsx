const AboutPage = () => {
  return (
    <div className=" h-screen bg-gradient-to-tr from-cyan-400 to-pink-400 px-8 pt-[15vh] w-full flex justify-center flex-col items-center">
      <h1 className=" w-fit text-3xl text-center text-white">
        This app is built using HTML, CSS & Typescript.
      </h1>
      <div className=" w-full h-fit flex justify-center">
        <div className=" w-full text-center text-neutral-100 text-xl">
          These are compiled using the NextJS framework, and TailwindCSS is used
          to apply CSS styling & adaptive sizing for varying displays. Axios is
          used to fetch live cryptocurrencies data from Coinrankin. And in-turn,
          Coinranking is accessed via the Rapid API hub. All the logic in this
          app runs via Typescript, & state management is handle through Zustand.
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
