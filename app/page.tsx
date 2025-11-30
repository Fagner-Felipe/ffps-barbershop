import Image from "next/image";
import Header from "./components/header";
import SearchInput from "./components/search-input";
import banner from "../public/banner.png";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 space-y-4">
        <SearchInput />
        <Image
          src={banner}
          alt="Agende agora"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </>
  );
};

export default Home;
