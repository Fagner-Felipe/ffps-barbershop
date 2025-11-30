const Footer = () => {
  return (
    <footer className="p-7 bg-muted md:w-5xl mx-auto mt-10 rounded-t-lg">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()} Sua Barbearia.
        </p>
        <p className="text-muted-foreground text-xs">
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
