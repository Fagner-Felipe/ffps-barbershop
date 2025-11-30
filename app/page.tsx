import Image from "next/image";
import Header from "./components/header";
import SearchInput from "./components/search-input";
import barbershopBanner from "../public/barbershopBanner.jpg";
import BookingItem from "./components/booking-item";
import { prisma } from "@/lib/prisma";
import BarbershopItem from "./components/barbershop-item";
import Footer from "./components/footer";
import {
  PageContainer,
  PageSection,
  PageSectionScroller,
  PageSectiontitle,
} from "./components/ui/page";

const Home = async () => {
  const recommendedBarbershops = await prisma.barbershop.findMany({
    orderBy: { name: "asc" },
  });

  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: { name: "desc" },
  });

  return (
    <main>
      <Header />
      <PageContainer>
        <SearchInput />
        <Image
          src={barbershopBanner}
          alt="Agende agora"
          sizes="100vw"
          className="w-full h-auto rounded-2xl"
        />
        <PageSection>
          <PageSectiontitle>Agendamentos</PageSectiontitle>
          <BookingItem
            serviceName="Corte de Cabelo"
            barbershopeName="Barbearia do Fagner"
            barbershopeImageUrl="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png"
            date={new Date()}
          />
        </PageSection>

        <PageSection>
          <PageSectiontitle>Barbearias Populares</PageSectiontitle>
          <PageSectionScroller>
            {recommendedBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSection>

        <PageSection>
          <PageSectiontitle>Recomendadas</PageSectiontitle>

          <PageSectionScroller>
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSection>
      </PageContainer>
      <Footer />
    </main>
  );
};

export default Home;
