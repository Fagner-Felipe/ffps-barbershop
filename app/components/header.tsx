import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

const header = () => {
  return (
    <header className="flex items-center justify-between gap-20 py-6 md:w-5xl mx-auto">
      <h1 className="text-2xl font-bold">Sua Barbearia</h1>
      <Button variant="outline" size="icon">
        <MenuIcon />
      </Button>
    </header>
  );
};

export default header;
