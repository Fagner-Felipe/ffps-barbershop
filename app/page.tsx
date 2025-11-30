import Image from "next/image";
import Header from "./components/header";
import SearchInput from "./components/search-input";
import barbershopBanner from "../public/barbershopBanner.jpg";
import BookingItem from "./components/booking-item";
import { prisma } from "@/lib/prisma";
import BarbershopItem from "./components/barbershop-item";

const Home = async () => {
  const recommendedBarbershops = await prisma.barbershop.findMany({
    orderBy: { name: "asc" },
  });

  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: { name: "desc" },
  });

  return (
    <>
      <Header />
      <div className="px-5 space-y-4 p-5">
        <SearchInput />
        <Image
          src={barbershopBanner}
          alt="Agende agora"
          sizes="100vw"
          className="w-full h-auto rounded-2xl"
        />
        <h2 className="text-xs font-semibold text-foreground uppercase">
          Barbearias
        </h2>
        <BookingItem
          serviceName="Corte de Cabelo"
          barbershopeName="Barbearia do Fagner"
          barbershopeImageUrl="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png"
          date={new Date()}
        />
        <h2 className="text-xs font-semibold text-foreground uppercase">
          Recomendadas
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden ">
          {recommendedBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2 className="text-xs font-semibold text-foreground uppercase">
          Barbearias Populares
        </h2>

        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden ">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
