const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="text-xl font-heading font-bold gradient-text">
          Koushik Atiqur
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Koushik Atiqur. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["About", "Projects", "Services", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
