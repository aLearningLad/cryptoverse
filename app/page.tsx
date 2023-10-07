import {
  HomeExplore,
  HomeFooter,
  HomeNews,
  HomeTop10,
  Landing,
  MobileFooter,
} from "./components";

export default function Home() {
  return (
    <main className="flex h-fit lg:h-[555vh] flex-col items-center justify-between lg:px-24 app_main">
      <div className=" h-full w-full">
        <Landing />
        <HomeExplore />
        <HomeTop10 />
        <HomeNews />
        <HomeFooter />
        <MobileFooter />
      </div>
    </main>
  );
}
