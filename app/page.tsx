import Image from "next/image";
import Header from "./components/header";
import SearchInput from "./components/search-input";
import barbershopBanner from "../public/barbershopBanner.jpg";
import BookingItem from "./components/booking-item";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 space-y-4">
        <SearchInput />
        <Image
          src={barbershopBanner}
          alt="Agende agora"
          sizes="100vw"
          className="w-full h-auto rounded-2xl"
        />
        <h2 className="text-xs font-semibold text-foreground uppercase">
          Agendamentos
        </h2>
        <BookingItem
          serviceName="Corte de Cabelo"
          barbershopeName="Barbearia do Fagner"
          barbershopeImageUrl="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png"
          date={new Date()}
        />
      </div>
    </>
  );
};

export default Home;
