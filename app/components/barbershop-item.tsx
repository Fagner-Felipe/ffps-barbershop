import Image from "next/image";
import { Barbershop } from "../generated/prisma/client";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <div className="relative min-h-[280px] min-w-[280px] rounded-xl">
      <div className="bg-linear-to-t from-black to-transparent h-full w-full absolute top-0 left-0 z-10 rounded-lg" />
      <Image
        src={barbershop.imageUrl}
        alt={barbershop.name}
        fill
        className="object-cover rounded-xl"
      />
      <div className="absolute righ-0 bottom-0 left-0 z-20 p-4">
        <h3 className="text-background text-lg font-bold">{barbershop.name}</h3>
        <p className="text-background text-sm">{barbershop.address}</p>
      </div>
    </div>
  );
};

export default BarbershopItem;
